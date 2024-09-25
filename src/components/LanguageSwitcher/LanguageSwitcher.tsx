// import styled from "styled-components";
// import { useTranslation } from "react-i18next";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { setLanguage } from "../../redux/languageReducer";
// import { useEffect } from "react";
// interface StyledButtonProps {
//   clicked: boolean;
// }

// const StyledButtonEn = styled.button<StyledButtonProps>`
//   padding: 4px 8px;
//   background-color: ${(props) => (props.clicked ? "#DACCFF" : "inherit")};
//   color: ${(props) => (props.clicked ? "#5826da" : "#2356B1")};
//   // font-family: Inter;
//   font-size: 18px;
//   font-weight: 500;
//   // line-height: 26px;
//   cursor: pointer;
//   border: none;
//   border-radius: 8px;
// `;
// const StyledButtonUa = styled.button<StyledButtonProps>`
//   padding: 4px 8px;
//   background-color: ${(props) => (props.clicked ? "#C9DAFA" : "inherit")};
//   color: ${(props) => (props.clicked ? "#2356B1" : "#5826da")};
//   // font-family: Inter;
//   font-size: 18px;
//   font-weight: 500;
//   // line-height: 26px;
//   cursor: pointer;
//   border: none;
//   border-radius: 8px;
// `;

// const LanguageSwitcherWrapper = styled.div<StyledButtonProps>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
//   border: 1px solid transparent;
//   border-radius: 12px;
//   background: linear-gradient(white, white) padding-box,
//     linear-gradient(
//         to bottom,
//         ${(props) => (props.clicked ? "#5826da 50%" : "#2356B1 50%")},
//         ${(props) => (props.clicked ? "#5826da 50%" : "#F7D849 50%")}
//       )
//       border-box;
// `;

// const LanguageSwitcher: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { i18n}  = useTranslation();
//   const currentLanguage= useAppSelector((state) => state.languageState) ;

//   const LanguageToggle = (language: string) => {
//     // setLanguage((prevLanguage) =>
//     //   prevLanguage === language ? "en" : language
//     // );
//     // const newLanguage = currentLanguage === "en" ? "ua" : "en";
//     dispatch(setLanguage(language));
//     // changeLanguage(language);
//   };
//   useEffect(() => {
//     i18n.changeLanguage(currentLanguage);
//   }, [currentLanguage, i18n]);


//   return (
//     <LanguageSwitcherWrapper clicked={currentLanguage === "en"}>
//       <StyledButtonEn
//         clicked={currentLanguage === "en"}
//         onClick={() => LanguageToggle("en")}
//       >
//         EN
//       </StyledButtonEn>
//       <StyledButtonUa
//         clicked={currentLanguage === "ua"}
//         onClick={() => LanguageToggle("ua")}
//       >
//         UA
//       </StyledButtonUa>
//     </LanguageSwitcherWrapper>
//   );
// };

// export default LanguageSwitcher;

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLanguage } from "../../redux/languageReducer";
import { useEffect } from "react";

// Тип для стилізованої кнопки
interface StyledButtonProps {
  isClicked: boolean; // Використовується тільки для стилізації
}

// Використовуємо shouldForwardProp, щоб не передавати isClicked у DOM
const StyledButtonEn = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isClicked", // Не передавати isClicked в DOM
})<StyledButtonProps>`
  padding: 4px 8px;
  background-color: ${(props) => (props.isClicked ? "#DACCFF" : "inherit")};
  color: ${(props) => (props.isClicked ? "#5826da" : "#2356B1")};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 8px;
`;

const StyledButtonUa = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isClicked", // Не передавати isClicked в DOM
})<StyledButtonProps>`
  padding: 4px 8px;
  background-color: ${(props) => (props.isClicked ? "#C9DAFA" : "inherit")};
  color: ${(props) => (props.isClicked ? "#2356B1" : "#5826da")};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 8px;
`;

const LanguageSwitcherWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isClicked", // Не передавати isClicked в DOM
})<StyledButtonProps>`
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
      <StyledButtonEn
        isClicked={currentLanguage === "en"}
        onClick={() => LanguageToggle("en")}
      >
        EN
      </StyledButtonEn>
      <StyledButtonUa
        isClicked={currentLanguage === "ua"}
        onClick={() => LanguageToggle("ua")}
      >
        UA
      </StyledButtonUa>
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;
