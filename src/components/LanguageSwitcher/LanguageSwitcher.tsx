import { useState } from "react";
import styled from "styled-components";

interface StyledButtonProps {
  clicked: boolean;
}

const StyledButtonEn = styled.button<StyledButtonProps>`
  padding: 4px 8px;
  background-color: ${(props) => (props.clicked ? "#DACCFF" : "inherit")};
  color: ${(props) => (props.clicked ? "#5826da" : "#2356B1")};
  // font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  // line-height: 26px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
`;
const StyledButtonUa = styled.button<StyledButtonProps>`
  padding: 4px 8px;
  background-color: ${(props) => (props.clicked ? "#C9DAFA" : "inherit")};
  color: ${(props) => (props.clicked ? "#2356B1" : "#5826da")};
  // font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  // line-height: 26px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
`;

const LanguageSwitcherWrapper = styled.div<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to bottom,
        ${(props) => (props.clicked ? "#5826da 50%" : "#2356B1 50%")},
        ${(props) => (props.clicked ? "#5826da 50%" : "#F7D849 50%")}
      )
      border-box;
`;

const LanguageSwitcher: React.FC = () => {
  const [currentLanguage, setLanguage] = useState("en");

  const LanguageToggle = (language: string) => {
    // setLanguage((prevLanguage) =>
    //   prevLanguage === language ? "en" : language
    // );
    setLanguage(() => language);
  };

  return (
    <LanguageSwitcherWrapper clicked={currentLanguage === "en"}>
      <StyledButtonEn
        clicked={currentLanguage === "en"}
        onClick={() => LanguageToggle("en")}
      >
        EN
      </StyledButtonEn>
      <StyledButtonUa
        clicked={currentLanguage === "ua"}
        onClick={() => LanguageToggle("ua")}
      >
        UA
      </StyledButtonUa>
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;
