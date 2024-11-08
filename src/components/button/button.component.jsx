import "./button.styles.scss";

const BUTTON_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
}

const Button = ({children, buttonType, ...otherProps}) =>{
    return (
        <button className={`button-container ${BUTTON_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    );
}

export default Button;