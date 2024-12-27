import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, FormInputField, Group } from "./form-input.styles";

type FormInputProps = {label: string} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({label, ...inputOptions}) => {
    return (
        <Group>
            <FormInputField {...inputOptions}></FormInputField>
            {label && (<FormInputLabel shrink={Boolean(inputOptions.value && typeof inputOptions.value === 'string' && inputOptions.value.length)}>{label}</FormInputLabel>)}
        </Group>
    );
}

export default FormInput;