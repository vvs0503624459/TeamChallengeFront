import { Formik } from "formik";
import * as Yup from "yup";
// import FormError from "../FormError/FormError";
import {
    FooterMail
} from '../IconComponents/IconsCatalogue';
import {
  SubDiv,
  SubTextDiv,
  SubTitle,
  SubText,
  SubForm,
  SubInput,
  Button,
} from "./FooterSab.styled";
interface MyFormValues {
  email: string;
}
const initialValues: MyFormValues = { email: "" };

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com"
    )
    .email("Invalid email format, test@mail.com")
    .required("Email is required"),
});
const FooterSab = () => {
  const handleSubmit = (values: MyFormValues) => {
    console.log(values);
    // resetForm();
  };
  return (
    <SubDiv>
      <SubTextDiv>
        <SubTitle>Subscribe to our newsletter!</SubTitle>
        <SubText>We will not bother you :)</SubText>
      </SubTextDiv>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <SubForm>
        
              <SubInput
                type="email"
                name="email"
                placeholder="example@email.com"
                error={errors.email && touched.email ? "true" : "false"}
                success={values.email && !errors.email ? "true" : "false"}
              />
              {/* <FormError name="email" /> */}
            <Button type="submit">
                <FooterMail />
                Subscribe
                </Button>
          </SubForm>
        )}
      </Formik>
    </SubDiv>
  );
};
export default FooterSab;
