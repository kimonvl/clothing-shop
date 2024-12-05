import { useState } from "react";

import { signInWithGooglePopup, signInWithEmailAndPasswordHandle } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import  Button, {BUTTON_CLASSES} from "../button/button.component";


import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import React from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

const defaultFormValues = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormValues);
    const {email, password} = formFields;

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        dispatch(emailSignInStart(email, password));
    }

    const logGoogleUser = async () =>{
        dispatch(googleSignInStart());
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Email"} type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label={"Password"} type="password" required name="password" value={password} onChange={handleChange} />
                <ButtonsContainer>
                    <Button buttonType={BUTTON_CLASSES.base} type="submit">Submit</Button>
                    <Button buttonType={BUTTON_CLASSES.google} type="button" onClick={logGoogleUser}>Sign In with google</Button>
                </ButtonsContainer  >
            </form>
        </SignInContainer>
    );
}

export default SignInForm;