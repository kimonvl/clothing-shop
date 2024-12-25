import { UserData } from "../../utils/firebase/firebase.utils";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import {USER_ACTION_TYPES} from "./user.types";

export type UserDataForState = UserData & {
    id: string;
}

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserDataForState>;

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>;

export type EmailSignUpStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_UP_START, {email: string, password: string, displayName: string}>;

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserDataForState>;

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const setCurrentUser = withMatcher((user: UserDataForState): SetCurrentUser => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
})

export const checkUserSession = withMatcher((): CheckUserSession => {
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
})

export const googleSignInStart = withMatcher((): GoogleSignInStart => {
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
})

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})
})

export const emailSignUpStart = withMatcher((email: string, password: string, displayName: string): EmailSignUpStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, {email, password, displayName})
})

export const signInSuccess = withMatcher((user: UserDataForState): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
})

export const signInFailed = withMatcher((error: Error): SignInFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
})

export const signOutStart = withMatcher((): SignOutStart => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_START)
})

export const signOutSuccess = withMatcher((): SignOutSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
})

export const signOutFailed = withMatcher((error: Error): SignOutFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
})