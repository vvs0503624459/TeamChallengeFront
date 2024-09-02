// import { useState } from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
import EditButton from "@/shared/buttons/EditButton";
import UserInfoTitle from "@/shared/titles/UserInfoTitle/UserInfoTitle";

import {
  PersonalInfoDiv,
  PersonalInfoContactDiv,

  PersonalContactList,
  //   AuthForm,
  //   InputsWrapper,
  //   InputWrap,
  //   Input,
} from "../PersonalInfo/PersonalInfo.styled";

import {
  SigninSecurityText,
  SigninSecurityItem,
} from "./SigninSecurity.styled";


import {
    PersonalInfoWrap,
    PersonalInfoLabel,
  } from "../UserInfo.styled";

// interface MyFormValues {
//   name: string;
//   surname: string;
// }

// const initialValues: MyFormValues = { name: "", surname: "" };

// const schema = Yup.object().shape({
//   name: Yup.string()
//     .min(3)
//     .required("Name is required")
//     .required("Name is required"),
//   surname: Yup.string()
//     .min(3)
//     .required("Surname is required")
//     .required("Surname is required"),
// });

const SigninSecurity = () => {
  return (
    <PersonalInfoWrap>
      <PersonalInfoDiv>
        <div>
        <UserInfoTitle title="Password" /> 
          <SigninSecurityText>
            Create a password or modify your existing one.
          </SigninSecurityText>

          {/* <Formik
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
                      placeholder="Create a password or modify your existing one."
                      error={errors.name && touched.name ? "true" : "false"}
                      success={values.name && !errors.name ? "true" : "false"}
                    />
                  </InputWrap>
                </InputsWrapper>
              </AuthForm>
            )}
          </Formik> */}
        </div>
        <EditButton label="Edit" />
      </PersonalInfoDiv>

      <PersonalInfoContactDiv>
      <UserInfoTitle title="Social sign in" /> 
        <SigninSecurityText>
          Link your social account for faster sign in and checkout.
        </SigninSecurityText>
        <PersonalContactList>
          <SigninSecurityItem>
            <PersonalInfoLabel>Google</PersonalInfoLabel>
            <div>
              <EditButton label="Edit" />
            </div>
          </SigninSecurityItem>
          <SigninSecurityItem>
            <PersonalInfoLabel>Facebook</PersonalInfoLabel>
            <div>
              <EditButton label="Edit" />
            </div>
          </SigninSecurityItem>
        </PersonalContactList>
      </PersonalInfoContactDiv>
    </PersonalInfoWrap>
  );
};

export default SigninSecurity;
