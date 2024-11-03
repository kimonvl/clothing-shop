import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
            const userDocRef = await createUserDocumentFromAuth(user.user, {displayName});
        }catch(error){
            console.log("error creating user", error);
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required name="displayName" value={displayName} onChange={handleChange}></input>

                <label>Email</label>
                <input type="email" required name="email" value={email} onChange={handleChange}></input>

                <label>Password</label>
                <input type="password" required name="password" value={password} onChange={handleChange}></input>

                <label>Confirm Password</label>
                <input type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUpForm;