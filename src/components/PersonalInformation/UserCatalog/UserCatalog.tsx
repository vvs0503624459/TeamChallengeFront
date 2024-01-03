// import {useState } from "react";
import user from "../../../data/user.json";
// import Select from 'react-select';

import { Section } from "../../Container/Container.styled";
import {
  BigUser,
  SliderRight,
  Orders,
  // Like,
  Favorites,
  RecentlyViewed,
  PersonalOffers,
  MyWallet,
  Bonus,
  HelpCenter,
} from "../../IconComponents/IconsCatalogue";
import {
  UserWrapper,
  UserDiv,
  UserDetDiv,
  UserName,
  UserEmail,
  UserButton,
  MenuList,
  MenuItem,
  TextDiv,
  MenuTitle,
} from "./UserCatalog.styled";

const UserCatalog = () => {
  return (
    <Section>
      <UserWrapper>
        <div>
          {user.map(({  name, email }) => (
            <UserDiv>
              <UserButton>
                <BigUser />
              </UserButton>
              <UserDetDiv>
                <div>
                  <UserName>{name}</UserName>
                  <UserEmail>{email}</UserEmail>
                </div>
                <SliderRight />
              </UserDetDiv>
            </UserDiv>
          ))}
          <MenuList>
            <MenuItem>
              <TextDiv>
                <Orders />
                <MenuTitle>Orders</MenuTitle>
                <SliderRight />
              </TextDiv>
            </MenuItem>
            <MenuItem>
              <TextDiv>
                <Favorites />
                <MenuTitle>Favorites</MenuTitle>
                <SliderRight />
              </TextDiv>
            </MenuItem>
            <MenuItem>
              <TextDiv>
                <RecentlyViewed />
                <MenuTitle>Recently viewed</MenuTitle>
                <SliderRight />
              </TextDiv>
            </MenuItem>
            <MenuItem>
              <TextDiv>
                <PersonalOffers />
                <MenuTitle>Personal offers</MenuTitle>
                <SliderRight />
              </TextDiv>
            </MenuItem>
            <MenuItem>
              <TextDiv>
                <MyWallet />
                <MenuTitle>My wallet</MenuTitle>
                <SliderRight />
              </TextDiv>
            </MenuItem>
            <MenuItem>
              <TextDiv>
                <Bonus />
                <MenuTitle>Bonus</MenuTitle>
                <SliderRight />
              </TextDiv>
            </MenuItem>
            <MenuItem>
              <TextDiv>
                <HelpCenter />
                <MenuTitle>Help center</MenuTitle>
                <SliderRight />
              </TextDiv>
            </MenuItem>
          </MenuList>
        </div>
      </UserWrapper>
    </Section>
  );
};
export default UserCatalog;

{
  /* <Icons name={category.right} /> */
}
{
  /* <StyledSelect
                classNamePrefix="Select"
                closeMenuOnSelect={true}
                isClearable={true}
                options={goods.map(({brand}) => ({
                  value: brand,
                  label: brand,
                }))}
       
                id="categories"
              />  */
}
