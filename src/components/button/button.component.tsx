import { ButtonHTMLAttributes, FC } from 'react';

import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles";

export enum BUTTON_CLASSES {
    base = "base",
    google = "google-sign-in",
    inverted = "inverted"
}


const getButton = (buttonType = BUTTON_CLASSES.base): typeof BaseButton | typeof GoogleSignInButton | typeof InvertedButton => {
    return (
        {
            [BUTTON_CLASSES.base]: BaseButton,
            [BUTTON_CLASSES.google]: GoogleSignInButton,
            [BUTTON_CLASSES.inverted]: InvertedButton,
        }[buttonType]
    );
}

export type ButtonProps = {
    buttonType?: BUTTON_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({children, buttonType, ...otherProps}) =>{
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    );
}

export default Button;