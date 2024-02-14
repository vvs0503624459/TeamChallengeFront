import styled from "styled-components";

export const ListStyled = styled.ul`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.TritiaryLightGray};
`;

export const ItemStyled = styled.li`
  position: relative;

  &:not(:last-child) {
    padding-bottom: 4px;
    border-bottom: 1px solid ${(props) => props.theme.TritiaryLightGray};
  }

  &:not(:first-child) {
    padding-top: 52px;
    &::before {
      content: "";
      width: 100%;
      top: 40px;
      position: absolute;
      border-bottom: 1px solid ${(props) => props.theme.TritiaryLightGray};
    }
  }

  & p {
    color: ${(props) => props.theme.PrimaryBlack};
    font-family: "InterMedium";
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const PropertyWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 94px;
  padding-top: 12px;
  border-top: 1px solid ${(props) => props.theme.TritiaryLightGray};

  & p {
    flex-basis: 406px;
    color: ${(props) => props.theme.TritiaryPurpleGray};
    font-family: "InterMedium";
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
