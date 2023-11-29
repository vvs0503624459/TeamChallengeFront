import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 16px 0;
  background: #ffffff;
  box-shadow: 0px 0px 22px 0px rgba(204, 204, 204, 0.29);
`;
export const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
export const DivLogoCatalogue = styled.div`
  display: flex;
  gap: 60px;
`;
export const CatalogueButton = styled.button`
  display: flex;
  width: 158px;
  padding: 9px 21px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 12px;
  background: #5826da;
`;
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
export const IconsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 24px;
`;

export const CatalogueBtnText = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
export const HeaderIconsWrapper = styled.div`
  display: flex;
 gap: 24px;

`;