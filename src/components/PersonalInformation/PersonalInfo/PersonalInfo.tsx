import user from "../../../data/user.json";
// import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import { CheckDone, CancelDone } from "../../IconComponents/IconsCatalogue";
import EditButton from "@/shared/buttons/EditButton";
import UserInfoTitle from "@/shared/titles/UserInfoTitle/UserInfoTitle";

import {
  PersonalInfoWrap,
  PersonalContactBorder,
  PersonalContactItem,
  PersonalInfoLabel,
  PersonalInfoNameTitle,
} from "../UserInfo.styled";

import {
  PersonalInfoContactDiv,
  PersonalContactList,
  PersonalContactItemTwo,
  PersonalInfoNameButton,
  AuthForm,
  InputsWrapper,
  InputWrap,
  Input,
  // CheckButtonList,
  // CheckButton,
} from "./PersonalInfo.styled";

interface MyFormValues {
  name: string;
  surname: string;
}

const initialValues: MyFormValues = { name: "", surname: "" };

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required("Name is required")
    .required("Name is required"),
  surname: Yup.string()
    .min(3)
    .required("Surname is required")
    .required("Surname is required"),
});

const PersonalInfo = () => {
  //   const [names, setNames] = useState({ firstname: '', surname: '' });

  //   user.forEach(({ name }) => {
  //     // Розділяємо ім'я на дві частини: ім'я та прізвище
  //     const [firstname, surname] = name.split(' ');

  //     // Тут ви можете використовувати firstname та surname за потреби
  //     console.log('First name:', firstname);
  //     console.log('Last name:', surname);

  //     // Зберігаємо ім'я та прізвище в стані, якщо вони будуть потрібні для рендерингу
  //     setNames({ firstname, surname });
  //   });

  let first = "";
  let second = "";
  let emails = "";
  let numbers = "";

  user.forEach(({ name, email, number }) => {
    const [firstname, surname] = name.split(" ");

    first = firstname;
    second = surname;
    emails = email;
    numbers = number;
  });
  console.log("First name:", first);
  console.log("Last name:", second);

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
    <PersonalInfoWrap>
      <PersonalContactBorder>
          <UserInfoTitle title="Personal information" />
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
                      placeholder="First name"
                      error={errors.name && touched.name ? "true" : "false"}
                      success={values.name && !errors.name ? "true" : "false"}
                    />
                  </InputWrap>
                  <InputWrap>
                    <Input
                      type="text"
                      name="surname"
                      placeholder="Last name"
                      error={
                        errors.surname && touched.surname ? "true" : "false"
                      }
                      success={
                        values.surname && !errors.surname ? "true" : "false"
                      }
                    />
                  </InputWrap>
                </InputsWrapper>
                {/* <CheckButtonList>
                  <li>
                    <CheckButton>
                      <CheckDone />
                    </CheckButton>
                  </li>
                  <li>
                    <CheckButton>
                      <CancelDone />
                    </CheckButton>
                  </li>
                </CheckButtonList> */}
              <EditButton label="Edit" />
              </AuthForm>
            )}
          </Formik>
      </PersonalContactBorder>

      <PersonalInfoContactDiv>
        <UserInfoTitle title="Contact information" />
        <PersonalContactList>
          <PersonalContactItem>
            <div>
              <PersonalInfoLabel>Email address</PersonalInfoLabel>
              <PersonalInfoNameTitle>{emails}</PersonalInfoNameTitle>
              <PersonalInfoNameButton>Not verified</PersonalInfoNameButton>
            </div>
            <div>
              <EditButton label="Verify" />
              <EditButton label="Edit" />
            </div>
          </PersonalContactItem>
          <PersonalContactItemTwo>
            <div>
              <PersonalInfoLabel>Last name</PersonalInfoLabel>
              <PersonalInfoNameTitle>{numbers}</PersonalInfoNameTitle>
              <PersonalInfoNameButton>Not verified</PersonalInfoNameButton>
            </div>
            <div>
              <EditButton label="Verify" />
              <EditButton label="Edit" />
            </div>
          </PersonalContactItemTwo>
        </PersonalContactList>
      </PersonalInfoContactDiv>
    </PersonalInfoWrap>
  );
};

export default PersonalInfo;

{
  /* <PersonalNameList>
<li>
  <PersonalInfoNameText>First name</PersonalInfoNameText>
  <PersonalInfoNameTitle>{first}</PersonalInfoNameTitle>
</li>
<li>
  <PersonalInfoNameText>Last name</PersonalInfoNameText>
       <PersonalInfoNameTitle>{second}</PersonalInfoNameTitle>
</li>
</PersonalNameList> */
}
