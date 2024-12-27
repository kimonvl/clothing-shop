import { ChangeEvent, FormEvent, useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_CLASSES} from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";
import { useDispatch } from "react-redux";
import { emailSignUpStart } from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormValues);
    const {displayName, email, password, confirmPassword} = formFields;

    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        try {
            dispatch(emailSignUpStart(email, password, displayName));
            setFormFields(defaultFormValues);
        } catch (error) {
            if((error as AuthError). code === AuthErrorCodes.EMAIL_EXISTS){
                alert('Cannot create user');
            }else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2> 
            <span>Sign up with your email and password</span>
            <form onSubmit={(e) => handleSubmit}>
                <FormInput label={"Display Name"} type="text" required name="displayName" value={displayName} onChange={(e) => handleChange} />
                <FormInput label={"Email"} type="email" required name="email" value={email} onChange={(e) => handleChange} />
                <FormInput label={"Password"} type="password" required name="password" value={password} onChange={(e) => handleChange} />
                <FormInput label={"Confirm Password"} type="password" required name="confirmPassword" value={confirmPassword} onChange={(e) => handleChange} />
                
                <Button buttonType={BUTTON_CLASSES.base} type="submit">Submit</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;