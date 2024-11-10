import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_CLASSES} from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormValues);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        try{
            const user = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user.user, {displayName});
            setFormFields(defaultFormValues);
        }catch(error){
            console.log("error creating user", error);
        }
        
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Display Name"} type="text" required name="displayName" value={displayName} onChange={handleChange} />
                <FormInput label={"Email"} type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label={"Password"} type="password" required name="password" value={password} onChange={handleChange} />
                <FormInput label={"Confirm Password"} type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                
                <Button buttonType={BUTTON_CLASSES.base} type="submit">Submit</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;