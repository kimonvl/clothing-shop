// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged, UserCredential, User, NextOrObserver } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, writeBatch, collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKB2sHYFisifFdlrOLOfVWY4BBRQVWFkQ",
  authDomain: "clothing-shop-db-4d9fc.firebaseapp.com",
  projectId: "clothing-shop-db-4d9fc",
  storageBucket: "clothing-shop-db-4d9fc.firebasestorage.app",
  messagingSenderId: "551456233820",
  appId: "1:551456233820:web:724a06f5ed6487eb85c999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithEmailAndPasswordHandle = async (email: string, passwrod: string): Promise<UserCredential | void> =>{
  if(!email || !passwrod)
    return;

  return await signInWithEmailAndPassword(auth, email, passwrod);
}

export const signOutUser = async (): Promise<void> =>{
  return await signOut(auth);
}

export const db = getFirestore();

type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

type CategoryData = {
  imageUrl: string;
  items: CategoryItem[];
  title: string;
}

export const getCategoriesMap = async (): Promise<CategoryData[]> => {
  const querySnapshot = await getDocs(collection(db, 'categories'));

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as CategoryData);
}

type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export type AdditionalInfo = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (userAuth: User, additionalInfo = {} as AdditionalInfo): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error saving  user", error);
    }
    return await getDoc(userDocRef) as QueryDocumentSnapshot<UserData>; 
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>{
  return onAuthStateChanged(auth, callback);
}

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
}

export const createAuthUserWithEmailAndPassword = async (email: string, passwrod: string): Promise<UserCredential | void> => {
  if(!email || !passwrod)
    return;

  return await createUserWithEmailAndPassword(auth, email, passwrod);
}