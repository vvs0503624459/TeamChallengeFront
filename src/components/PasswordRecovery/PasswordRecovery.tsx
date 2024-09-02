import { Formik } from "formik";
import * as Yup from "yup";
// import { useState } from "react";

import FormError from "../FormError/FormError";
import PageTitle from "../../shared/titles/PageTitle/PageTitle";

import {
  SignWrapper,
  AuthForm,
  InputsWrapper,
  Input,
  InputWrap,
  Button,
  ErrorIcon,
  SuccessIcon,
  SignText,
} from "../SignupForm/SignupForm.styled";

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

type Prop = {
  handleToggleThankyouModal: () => void;
};
const PasswordRecovery = ({ handleToggleThankyouModal }: Prop) => {

  const handleSubmit = (
    values: MyFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    // const { email } = { email: values };
    console.log(values);

    // dispatch(signIn({ email, password }))
    //   .unwrap()
    //   .then(() => toast.success('Login  succesfully'))
    //   .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
  };
  return (
    <SignWrapper>
      <PageTitle title={"Password recovery"} />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <AuthForm>
            <InputsWrapper>
              <InputWrap>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={errors.email && touched.email ? "true" : "false"}
                  success={values.email && !errors.email ? "true" : "false"}
                />
                <FormError name="email" />
                {errors.email && touched.email ? (
                  <ErrorIcon />
                ) : values.email && !errors.email ? (
                  <SuccessIcon />
                ) : null}
              </InputWrap>
            </InputsWrapper>
            <Button type="submit" onClick={handleToggleThankyouModal}>
              Send a letter to the mail
            </Button>
            <SignText>I remembered the password</SignText>
          </AuthForm>
        )}
      </Formik>
    </SignWrapper>
  );
};
export default PasswordRecovery;
