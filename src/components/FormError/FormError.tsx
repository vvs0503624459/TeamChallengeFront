import { ErrorMessage } from "formik";
import { ErrorText } from "./FormError.styled";

type Props = {
    name: string;
};

const FormError = ({ name }: Props) => {
    return (
        <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>}/>
    )
};

export default FormError;