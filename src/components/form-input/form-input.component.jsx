import { FormInputLabel, FormInputField, Group } from "./form-input.styles";

const FormInput = ({label, ...inputOptions}) => {
    return (
        <Group>
            <FormInputField {...inputOptions}></FormInputField>
            {label && (<FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>)}
        </Group>
    );
}

export default FormInput;