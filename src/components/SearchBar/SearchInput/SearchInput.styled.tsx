import styled from "styled-components";

export const SearchInputField = styled.input`
  position: relative;
  width: calc(100% - 34px);
  border: none;
  padding: 0;
  font-size: 16px;

  // font-family: Inter;

  &:focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: #aea8b7;
    line-height: 24px;
    font-weight: 500;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
