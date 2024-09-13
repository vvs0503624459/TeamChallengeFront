import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLanguage } from "../../redux/languageReducer";
import { useEffect } from "react";

// Функція для фільтрації пропсів
const shouldForwardProp = (prop: string) => !['isClicked'].includes(prop);

const StyledButton = styled.button.withConfig({ shouldForwardProp })<{ isClicked: boolean }>`
  padding: 4px 8px;
  background-color: ${(props) => (props.isClicked ? "#DACCFF" : "inherit")};
  color: ${(props) => (props.isClicked ? "#5826da" : "#2356B1")};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 8px;
`;

const LanguageSwitcherWrapper = styled.div.withConfig({ shouldForwardProp })<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to bottom,
        ${(props) => (props.isClicked ? "#5826da 50%" : "#2356B1 50%")},
        ${(props) => (props.isClicked ? "#5826da 50%" : "#F7D849 50%")}
      )
      border-box;
`;

const LanguageSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const currentLanguage = useAppSelector((state) => state.languageState);

  const LanguageToggle = (language: string) => {
    dispatch(setLanguage(language));
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <LanguageSwitcherWrapper isClicked={currentLanguage === "en"}>
      <StyledButton
        isClicked={currentLanguage === "en"}
        onClick={() => LanguageToggle("en")}
      >
        EN
      </StyledButton>
      <StyledButton
        isClicked={currentLanguage === "ua"}
        onClick={() => LanguageToggle("ua")}
      >
        UA
      </StyledButton>
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;


