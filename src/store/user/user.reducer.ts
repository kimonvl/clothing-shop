import { AnyAction } from "redux";
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, UserDataForState } from "./user.action";

export type UserState = {
    currentUser: UserDataForState | null;
    isLoading: boolean;
    error: Error | null;
}

export const USER_INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {

    if(signInSuccess.match(action)){
        return {...state, currentUser: action.payload};
    }

    if(signInFailed.match(action)){
        return {...state, error: action.payload};
    }

    if(signOutSuccess.match(action)){
        return {...state, currentUser: null};
    }

    if(signOutFailed.match(action)){
        return {...state, error: action.payload};
    }

    return state;
}