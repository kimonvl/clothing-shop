import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import {USER_ACTION_TYPES} from "./user.types";
import { AdditionalInfo, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInWithEmailAndPasswordHandle, signInWithGooglePopup, signOutUser } from "../../utils/firebase/firebase.utils";
import { EmailSignInStart, EmailSignUpStart, signInFailed, signInSuccess, signOutFailed, signOutSuccess } from "./user.action";
import { User } from "firebase/auth";

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInfo) {
    try {
        const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
        if(userSnapshot){
            yield* put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
        }        
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* isUserAuthenticated() {
    try {
        const user = yield* call(getCurrentUser);
        if(!user) return;
        yield* call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInUserWithEmailAndPassword(action: EmailSignInStart){
    const {email, password} = action.payload;
    try {
        const user = yield* call(signInWithEmailAndPasswordHandle, email, password);
        if(!user) return;
        yield* call(getSnapshotFromUserAuth, user.user);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInUserWithGoogle() {
    try {
        const user = yield* call(signInWithGooglePopup);
        if(!user) return;
        yield* call(getSnapshotFromUserAuth, user.user);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signUpUserWithEmailAndPassword(action: EmailSignUpStart) {
    const {email, password, displayName} = action.payload;
    console.log("payload" ,action.payload);
    try {
        const user = yield* call(createAuthUserWithEmailAndPassword, email, password);
        if(!user) return;
        yield* call(getSnapshotFromUserAuth, user.user, {displayName});
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signOutUserHandle() {
    try {
        yield* call(signOutUser);
        yield* put(signOutSuccess());
    } catch (error) {
        yield* put(signOutFailed(error as Error));
    }
}

export function* onCheckUserSession() {
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInUserWithEmailAndPassword)
}

export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInUserWithGoogle);
}

export function* onEmailSignUpStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpUserWithEmailAndPassword);
}

export function* onSignOutStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutUserHandle);
}

export function* userSagas() {
    yield* all([call(onCheckUserSession), call(onEmailSignInStart), call(onGoogleSignInStart), call(onEmailSignUpStart), call(onSignOutStart)])
}
