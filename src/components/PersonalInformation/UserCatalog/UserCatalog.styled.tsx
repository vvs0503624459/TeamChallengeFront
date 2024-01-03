import styled from "styled-components";
import ReactSelect from "react-select";

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    width: 100%;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(-90deg);
      // transition: transform ;
      width: 24px;
      height: 24px;
      color: #AEA8B7;
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(360deg);
      }
    }
  }

  & .Select__value-container {
    display: none;

    @media screen and (min-width: 768px) {
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  // & .Select__indicator {
  //   cursor: pointer;

  //   &:hover {
  //     color: #f3f3f3;
  //   }

  //   @media screen and (min-width: 768px) {

  //   }
  // }

  // & .Select__input-container {
  //   color: #f3f3f3;
  //   margin: 0;
  //   padding: 0;

  //   &:hover {
  //     color: #f3f3f3;
  //   }

  //   @media screen and (min-width: 768px) {
  //     font-size: 17px;
  //   }
  // }

  // & .Select__input {
  //   line-height: 1.285 !important;

  //   @media screen and (min-width: 768px) {
  //     line-height: 1.56 !important;
  //   }
  // }

  & .Select__placeholder,
  & .Select__single-value {
    color: #f3f3f3;
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    z-index: 100;
    width: 200px;
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: #FFFFFF;
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    // background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    color: #1e1d21;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    padding: 4px 14px;
    border-radius: 20px;

    // transition:
    //   color ,
    //   background-color ;
    background-color: transparent;
    cursor: pointer;
    &:hover,
    &:focus {
      color: #FFFFFF;
      // background-color: #e0d4f7;
      background-color: #6142db;
    }

    &:active {
      color: #FFFFFF;
      background-color: #e0d4f7;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 16px;
  border-radius: 0px 12px;
  border: 1px solid #e0e4f0;
  width: 334px;
`;
//UserDiv
export const UserDiv = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--Tritiary-light-gray, #e0e4f0);
`;
export const UserDetDiv = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.h4`
  color: var(--Primary-black, #1e1d21);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const UserEmail = styled.p`
  width: 174px;
  color: var(--Primary-black, #1e1d21);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const UserButton = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: var(--Tritiary-light-gray, #e0e4f0);
  border: none;
`;

//UserDiv
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 334px;
`;

export const MenuItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 8px 20px 8px 34px;

  &:focus,
  &:hover {
    color: #5826da;
    background-color: #e0e4f0;
  }

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;

export const TextDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const MenuTitle = styled.h3`
  width: 200px;
  color: #1e1d21;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  // &:focus,
  // &:hover {
  //   color:  #5826DA;

  // }
`;
