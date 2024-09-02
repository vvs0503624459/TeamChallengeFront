import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

import { signUp } from '../../redux/auth/auth-operation';
import { AuthUserState } from '../../redux/types/initialEntity';

import  { useAppDispatch } from '../../redux/hooks';
import { toast } from 'react-toastify';

import FormError from "../FormError/FormError";
import PageTitle from "../../shared/titles/PageTitle/PageTitle";
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
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const initialValues: MyFormValues = {
  firstname: '', 
  lastname: '', 
  phoneNumber: '',
   email: '',
    password: ''

};

const schema = Yup.object().shape({
  firstname: Yup.string()
    .min(3)
    .trim()
    .strict(true)
    .required("Name is required")
    .required("Name is required"),
    lastname: Yup.string()
    .min(3)
    .trim()
    .strict(true)
    .required("Surname is required")
    .required("Surname is required"),
    phoneNumber: Yup.string()
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
    .trim()
    .strict(true)
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: MyFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const { firstname, lastname, phoneNumber, email, password } = values;
    console.log(values)
    dispatch(signUp({ firstname, lastname, phoneNumber, email, password } as AuthUserState))
    // dispatch(signUp({ firstname, lastname, phoneNumber, email, password }))
      .unwrap()
      .then(() => toast.success('Registration succesfully'))
      .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
  };

  // let navigate = useNavigate()

  // const signUp = async (values: MyFormValues) => {
  //   const params = {
  //     user: {
  //       ...values,
  //     },
  //   }
  //   await configureAxios
  //     .post('auth/signup', params)
  //     .then((response) => {
  //       if (response.data.user.token) {
  //         localStorage.setItem(
  //           'token',
  //           JSON.stringify(response.data.user.token)
  //         )
  //         // navigate('/admin-panel')
  //       }
  //     })
  //     .catch((error) => console.log('error', error))
  // }


  return (
    <SignWrapper>
      <PageTitle title={"Sign Up"} />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
        // onSubmit={(values) => {
        //   signUp(values)
        // }}
      >
        {({ values, errors, touched }) => (
          <AuthForm>
            <InputsWrapper>
              <InputWrap>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Name"
                  error={errors.firstname && touched.firstname ? "true" : "false"}
                  success={values.firstname && !errors.firstname ? "true" : "false"}
                />
                <FormError name="firstname" />
                {errors.firstname && touched.firstname ? (
                  <ErrorIcon />
                ) : values.firstname && !errors.firstname ? (
                  <SuccessIcon />
                ) : null}
              </InputWrap>
              <InputWrap>
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Surname"
                  error={errors.lastname && touched.lastname ? "true" : "false"}
                  success={values.lastname && !errors.lastname ? "true" : "false"}
                />
                <FormError name="lastname" />
                {errors.lastname && touched.lastname ? (
                  <ErrorIcon />
                ) : values.lastname && !errors.lastname ? (
                  <SuccessIcon />
                ) : null}
              </InputWrap>
              <InputWrap>
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  error={errors.phoneNumber && touched.phoneNumber ? "true" : "false"}
                  success={values.phoneNumber && !errors.phoneNumber ? "true" : "false"}
                />
                <FormError name="phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <ErrorIcon />
                ) : values.phoneNumber && !errors.phoneNumber ? (
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
