// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists())
  {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error saving  user", error.message);
    }    
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, passwrod) => {
  if(!email || !passwrod)
    return;

  return await createUserWithEmailAndPassword(auth, email, passwrod);
}