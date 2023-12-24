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
  PasswordButton,
  SignDecorText,
  SignText,
} from "../SignupForm/SignupForm.styled";

interface MyFormValues {
  email: string;
  password: string;
}

const initialValues: MyFormValues = { email: "", password: "" };

const schema = Yup.object().shape({
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

type Props = {
  handleIsForgotPassword: () => void;
};

const SigninForm = ({ handleIsForgotPassword }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  // const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  // const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // const handleToggleUserModal = () => {
  //   setIsUserInfoModalOpen((state) => !state);

  // };

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
      <PageTitle title={"Sign In"} />
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
            <PasswordButton type="submit" onClick={handleIsForgotPassword}>
              Forgot your password?
            </PasswordButton>
            <Button type="submit">Sign In</Button>
            <SignDecorText>or by</SignDecorText>
            <ModalIcons />

            <SignText>I don't have an account yet</SignText>
          </AuthForm>
        )}
      </Formik>
    </SignWrapper>
  );
};

export default SigninForm;
