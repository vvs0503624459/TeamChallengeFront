import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field } from "formik";
import "./footer.scss";
import {
  Logo,
  FooterInstagram,
  FooterTwitter,
  FooterFacebook,
  IconRight,
} from "../../assets/Icons";
import { Container } from "../Container/Container.styled";

import { useTranslation } from "react-i18next";

import * as Yup from "yup";
// import  { useAppDispatch } from '../../redux/hooks';
// import { subscribeEmail } from '../../redux/auth/auth-operation';
// import { AuthUserState } from '../../redux/types/initialEntity';
// import FormError from "../FormError/FormError";
import { FooterMail } from "../../assets/Icons";


interface MyFormValues {
  email: string;
}
const initialValues: MyFormValues = { email: "" };

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com"
    )
    .email("Invalid email format, test@mail.com")
    .required("Email is required"),
});

const Footer = () => {
  // const dispatch = useAppDispatch();
  const [isTechEaseOpen, setTechEaseOpen] = useState(false);
  const [isInfoOpen, setInfoOpen] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = () => {};

  // const handleSubmit = (
  //   values: MyFormValues,
  //   { resetForm }: { resetForm: () => void }
  // ) => {
  //   const { email } = values;
  //   dispatch(subscribeEmail({ email } as AuthUserState))

  //   resetForm();
  // };
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="info-container">
            <div>
              <Logo />
              <p className="footer-text">{t("Simplify Your Tech Journey")}</p>
              <ul className="footer-icon-list">
                <li>
                  <FooterInstagram />
                </li>
                <li>
                  <FooterTwitter />
                </li>
                <li>
                  <FooterFacebook />
                </li>
              </ul>
            </div>

            <div className="footer-information-wrapper">
              <div>
                <div className="information-container">
                  <h4 className="information-list-title">TechEase</h4>
                  <button
                    className={isTechEaseOpen ? "open" : ""}
                    onClick={() => setTechEaseOpen(!isTechEaseOpen)}
                  >
                    <IconRight />
                  </button>
                </div>
                <ul
                  className={`information-list ${
                    isTechEaseOpen ? "open" : "closed"
                  }`}
                >
                  <li className="information-item">{t("About")}</li>
                  <li className="information-item">{t("Vacancies")}</li>
                  <li className="information-item">{t("Customer Support")}</li>
                </ul>
              </div>

              <div>
                <div className="information-container">
                  <h4 className="information-list-title">{t("Information")}</h4>
                  <button
                    className={isInfoOpen ? "open" : ""}
                    onClick={() => setInfoOpen(!isInfoOpen)}
                  >
                    <IconRight />
                  </button>
                </div>
                <ul
                  className={`information-list ${
                    isInfoOpen ? "open" : "closed"
                  }`}
                >
                  <li className="information-item">
                    {t("Delivery and payment")}
                  </li>
                  <li className="information-item">
                    {t("Warranty and service")}
                  </li>
                  <li className="information-item">
                    {t("Return and exchange")}
                  </li>
                  <li className="information-item">{t("Credit")}</li>
                </ul>
              </div>
            </div>

            {/* <FooterSab /> */}
            <div className="sub-div">
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched }) => (
                  <form className="sub-form">
                    <div className="sub-div-text">
                      <h3 className="sub-title">
                        Subscribe to our newsletter!
                      </h3>
                      <p className="sub-text">We will not bother you :)</p>
                    </div>
                    <Field
                      className="sub-input"
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      error={errors.email && touched.email ? "true" : "false"}
                      success={values.email && !errors.email ? "true" : "false"}
                    />
                    {/* <FormError name="email" /> */}
                    <button type="submit" className="button">
                      <FooterMail />
                      Subscribe
                    </button>
                  </form>
                )}
              </Formik>
            </div>
            {/* <FooterSab /> */}
          </div>

          <div className="policy-wrapper">
            <p className="policy-text">{t("TechEase")}</p>
            <ul className="policy-list">
              <li className="policy-item">
                <NavLink className="policy-link" to={`/cookie`}>
                  {t("Cookie Policy")}
                </NavLink>
              </li>
              <li className="policy-item">
                <NavLink className="policy-link" to={`/privacy`}>
                  {t("Privacy Policy")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
