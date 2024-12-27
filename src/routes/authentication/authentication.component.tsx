import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationPageContainer } from "./authentication.styles";

const Authentication = () => {

    return (
        <AuthenticationPageContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationPageContainer>
    );
}

export default Authentication;