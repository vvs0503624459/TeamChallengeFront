import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import FormError from "../FormError/FormError";
import PageTitle from "../PageTitle/PageTitle";
import ModalIcons from "../ModalIcons/ModalIcons";

import {
  SignWrapper,
  AuthForm,
  InputsWrapper,
  Input,
  InputWrap,
  TogglePasswordButton,
  StyledDontShowPasswordIcon,
  StyledShowPasswordIcon,
  Button,
  ErrorIcon,
  SuccessIcon,
  SignDecorText,
  SignText,
} from "../SignupForm/SignupForm.styled";

interface MyFormValues {
  name: string;
  surname: string;
  number: string;
  email: string;
  password: string;
}

const initialValues: MyFormValues = {
  name: "",
  surname: "",
  number: "",
  email: "",
  password: "",
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required("Name is required")
    .required("Name is required"),
  surname: Yup.string()
    .min(3)
    .required("Surname is required")
    .required("Surname is required"),
  number: Yup.string()
    .min(6)
    .required("Number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com"
    )
    .email("Invalid email format, test@mail.com")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
      <PageTitle title={"Sign Up"} />
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
                  type="text"
                  name="name"
                  placeholder="Name"
                  error={errors.name && touched.name ? "true" : "false"}
                  success={values.name && !errors.name ? "true" : "false"}
                />
                <FormError name="name" />
                {errors.name && touched.name ? (
                  <ErrorIcon />
                ) : values.name && !errors.name ? (
                  <SuccessIcon />
                ) : null}
              </InputWrap>
              <InputWrap>
                <Input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  error={errors.surname && touched.surname ? "true" : "false"}
                  success={values.surname && !errors.surname ? "true" : "false"}
                />
                <FormError name="surname" />
                {errors.surname && touched.surname ? (
                  <ErrorIcon />
                ) : values.surname && !errors.surname ? (
                  <SuccessIcon />
                ) : null}
              </InputWrap>
              <InputWrap>
                <Input
                  type="tel"
                  name="number"
                  placeholder="Phone number"
                  error={errors.number && touched.number ? "true" : "false"}
                  success={values.number && !errors.number ? "true" : "false"}
                />
                <FormError name="number" />
                {errors.number && touched.number ? (
                  <ErrorIcon />
                ) : values.number && !errors.number ? (
                  <SuccessIcon />
                ) : null}
              </InputWrap>
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
              <InputWrap>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  placeholder="Password"
                  error={errors.password && touched.password ? "true" : "false"}
                  success={
                    values.password && !errors.password ? "true" : "false"
                  }
                />
                <FormError name="password" />
                {errors.password && touched.password ? (
                  <ErrorIcon />
                ) : values.password && !errors.password ? (
                  <SuccessIcon />
                ) : null}
                <TogglePasswordButton
                  type="button"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <StyledDontShowPasswordIcon />
                  ) : (
                    <StyledShowPasswordIcon />
                  )}
                </TogglePasswordButton>
              </InputWrap>
            </InputsWrapper>
            <Button type="submit">Sign Up</Button>
            <SignDecorText>or by</SignDecorText>

            <ModalIcons />
            <SignText>I already have an account</SignText>
          </AuthForm>
        )}
      </Formik>
    </SignWrapper>
  );
};
export default SignupForm;
