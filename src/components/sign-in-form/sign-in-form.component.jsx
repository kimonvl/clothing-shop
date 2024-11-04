import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithEmailAndPasswordHandle } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormValues = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormValues);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        try{
            const userCredentials = await signInWithEmailAndPasswordHandle(email, password);
            console.log(userCredentials);
        }catch(error){
            console.log("error creating user", error);
        }
        
    }

    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    };
    /* */

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Email"} type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label={"Password"} type="password" required name="password" value={password} onChange={handleChange} />
                <div className="buttons-container-sign-in-form">
                <Button buttonType={""} type="submit">Submit</Button>
                <Button buttonType={"google"} type="button" onClick={logGoogleUser}>Sign In with google</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;