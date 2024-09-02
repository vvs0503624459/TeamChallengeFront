// import { useState } from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
import EditButton from "@/shared/buttons/EditButton";
import UserInfoTitle from "@/shared/titles/UserInfoTitle/UserInfoTitle";

import {
  PersonalInfoContactDiv,
  //   AuthForm,
  //   InputsWrapper,
  //   InputWrap,
  //   Input,
} from "../PersonalInfo/PersonalInfo.styled";



import {
  PersonalInfoWrap,
  PersonalContactBorder,
  PersonalContactItem,
  PersonalInfoLabel,
  PersonalInfoNameTitle,
} from "../UserInfo.styled";

import { AddressList, AddressItem
 } from "./UserProfAddresses.styled";

import addresses from "@/data/addresses.json";
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

type UserProfAddressesProps = {
  country: string;
  city: string;
  state: string;
  street: string;
  zipcode: string;
  house: string;
  apt: string;
};

// const UserProfAddresses: React.FC<UserProfAddressesProps> = () => {
const UserProfAddresses = () => {
  return (
    <PersonalInfoWrap>
      {addresses.map(
        ({
          country,
          city,
          state,
          street,
          zipcode,
          house,
          apt,
        }: UserProfAddressesProps) => (
          <>
            <PersonalContactBorder>
              <div>
                <UserInfoTitle title="Country or region" />
                <AddressList>
                  <li>
                    <PersonalInfoLabel>Country</PersonalInfoLabel>
                    <PersonalInfoNameTitle>{country}</PersonalInfoNameTitle>
                  </li>
                  <li>
                    <PersonalInfoLabel>City</PersonalInfoLabel>
                    <PersonalInfoNameTitle>{city}</PersonalInfoNameTitle>
                  </li>
                </AddressList>
              </div>
              <EditButton label="Edit" />
            </PersonalContactBorder>

            <PersonalInfoContactDiv>
              <UserInfoTitle title="Address" />

              <AddressList>
                <PersonalContactItem>
                  <PersonalInfoLabel>State/Province</PersonalInfoLabel>
                  <PersonalInfoNameTitle>{state}</PersonalInfoNameTitle>
                </PersonalContactItem>

                <PersonalContactItem>
                  <PersonalInfoLabel>Street</PersonalInfoLabel>
                  <PersonalInfoNameTitle>{street}</PersonalInfoNameTitle>
                </PersonalContactItem>

                <PersonalContactItem>
                  <PersonalInfoLabel>Zip code</PersonalInfoLabel>
                  <PersonalInfoNameTitle>{zipcode}</PersonalInfoNameTitle>
                </PersonalContactItem>

                <PersonalContactItem>
                  <PersonalInfoLabel>House</PersonalInfoLabel>
                  <PersonalInfoNameTitle>{house}</PersonalInfoNameTitle>
                </PersonalContactItem>

                <PersonalContactItem>
                  <PersonalInfoLabel>Apt, Suite..</PersonalInfoLabel>
                  <PersonalInfoNameTitle>{apt}</PersonalInfoNameTitle>
                </PersonalContactItem>
              </AddressList>
              <div>
                <EditButton label="Edit" />
              </div>
            </PersonalInfoContactDiv>
          </>
        )
      )}
    </PersonalInfoWrap>
  );
};

export default UserProfAddresses;
