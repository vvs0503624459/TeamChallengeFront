import { Container } from "../../shared/Container/Container.styled";
import PageTitle from "../../shared/PageTitle/PageTitle";
import { MdSecurity } from 'react-icons/md';
import { CookiePolicyDescrip, CookiePolicyDescription, CookiePolicyItem, CookiePolicyList, CookiePolicyNameInput, CookiePolicySection, CookiePolicyTitle } from "./CookiePolicy.styled";


const CookiePolicy = () => {
    return(
        <CookiePolicySection>
            <Container>
                <PageTitle title="Cookie Policy" />
                <CookiePolicyTitle>
                    This "User Agreement" the "Agreement" sets forth the terms and conditions governing the use of the TechEase application "App" and its services.
                </CookiePolicyTitle>
                <CookiePolicyList>
                    <CookiePolicyItem>
                        <CookiePolicyNameInput> <MdSecurity size={20} />Acceptance of Terms:</CookiePolicyNameInput>
                        <CookiePolicyDescription>
                            By accessing or using the TechEase app, you agree to comply with and be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, you should immediately discontinue the use of the App.
                        </CookiePolicyDescription>
                    </CookiePolicyItem>
                    <CookiePolicyItem>
                        <CookiePolicyNameInput><MdSecurity size={20} />App Features and Services:</CookiePolicyNameInput>
                        <CookiePolicyDescription>
                        The TechEase app gives users access to…
                        </CookiePolicyDescription>
                    </CookiePolicyItem>
                    <CookiePolicyItem>
                        <CookiePolicyNameInput><MdSecurity size={20} />User Accounts and Content:</CookiePolicyNameInput>
                        <CookiePolicyDescription>
                        You may need to create a user account to take full advantage of the app's features. You are responsible for maintaining the confidentiality of your account credentials and any content you submit. You retain ownership of your content, but by submitting you grant the App a non-exclusive, royalty-free license to use, modify and distribute your content on the App.
                        </CookiePolicyDescription>
                    </CookiePolicyItem>
                    <CookiePolicyItem>
                        <CookiePolicyNameInput><MdSecurity size={20} />Intellectual Property:</CookiePolicyNameInput>
                        <CookiePolicyDescription>
                        All content provided by [ ], including images and text, is protected by copyright and other intellectual property laws. Users may not reproduce, distribute or use these materials for commercial purposes without the express permission of the program operators.
                        </CookiePolicyDescription>
                    </CookiePolicyItem>
                    <CookiePolicyItem>
                        <CookiePolicyNameInput><MdSecurity size={20} />App Updates and Changes:</CookiePolicyNameInput>
                        <CookiePolicyDescription>
                            The features and functionality of the TechEase app may evolve over time. The App reserves the right to modify, update, or discontinue any aspect of the App without prior notice.
                        </CookiePolicyDescription>
                    </CookiePolicyItem>
                    <CookiePolicyItem>
                        <CookiePolicyNameInput><MdSecurity size={20} />Disclaimer of Liability:</CookiePolicyNameInput>
                        <CookiePolicyDescription>
                        The TechEase program guarantees to provide accurate and reliable information about the given content.
                        </CookiePolicyDescription>
                    </CookiePolicyItem>
                    <CookiePolicyItem>
                        <CookiePolicyNameInput><MdSecurity size={20} />Governing Law and Dispute Resolution:</CookiePolicyNameInput>
                        <CookiePolicyDescription>
                            This Agreement shall be governed by the laws of [Country/State]. Any disputes arising from or related to this Agreement or the use of the App shall be subject to the exclusive jurisdiction of the courts in [City, Country/State].
                        </CookiePolicyDescription>
                    </CookiePolicyItem>
                </CookiePolicyList>
                <CookiePolicyDescrip>
                    By accessing or using the TechEase app, you acknowledge that you have read, understood, and agreed to be bound by this User Agreement. If you do not agree to these terms, you must cease using the App immediately.
                </CookiePolicyDescrip>
        </Container>
        </CookiePolicySection>
    )
};

export default CookiePolicy;