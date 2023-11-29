import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import FormError from "../FormError/FormError";

import {
  AuthForm,
  Input,
  InputWrap,
  TogglePasswordButton,
  StyledDontShowPasswordIcon,
  StyledShowPasswordIcon,
  Button,
  ErrorIcon,
  SuccessIcon,
} from "../SignupForm/SignupForm.styled";

interface MyFormValues {
  email: string;
  password: string;
}

// type Props = {
//     name: string;
//     email: string;
//     password: string;
//   };
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

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values: MyFormValues) => {
    console.log(values);
    // resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <AuthForm>
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
              success={values.password && !errors.password ? "true" : "false"}
            />
            <FormError name="password" />
            {errors.password && touched.password ? (
              <ErrorIcon />
            ) : values.password && !errors.password ? (
              <SuccessIcon />
            ) : null}
            <TogglePasswordButton type="button" onClick={handleTogglePassword}>
              {showPassword ? (
                <StyledDontShowPasswordIcon />
              ) : (
                <StyledShowPasswordIcon />
              )}
            </TogglePasswordButton>
          </InputWrap>
          <Button type="submit">Sign In</Button>
        </AuthForm>
      )}
    </Formik>
  );
};
export default SignupForm;
