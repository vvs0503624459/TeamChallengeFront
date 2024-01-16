import styled from "styled-components";

export const CurrentOfferList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const CurrentOfferItem = styled.li<{ color: string }>`
  width: 298px;
  height: 150px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};
  background: ${({ color }) => color};
  display: flex;
  flex: 1 0 0;
  align-items: center;

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;

export const CurrentOfferDiv = styled.div`
  padding: 15px 0 15px 20px;
  width: 155px;
  height: 122px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;
export const CurrentOfferTitle = styled.h5`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;
export const CurrentOfferPrice = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 130% */

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;
export const CurrentOfferDisc = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;
export const CurrentOfferText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;

  overflow: hidden;
  color: ${({ theme }) => theme.PrimaryBlack};
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 114.286% */

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;

// export const CurrentOfferImgDiv = styled.div`
// left: 56%;
//     top: 70%;
//     position: absolute;
//     width: 179.197px;
//     height: 278.74px;
//     transform: rotate(45deg);
//     flex-shrink: 0;
//     border-radius: 12px;
//     background: var(--Primary-white, #FFF);

//   //   @media screen and (min-width: 768px) {

//   //   }

//   //   @media screen and (min-width: 1440px) {

//   //   }
// `;
// export const CurrentOfferImg = styled.img`
// transform: rotate(315deg);
// position: absolute;
// top: 43%;
// left: 15%;
//   //   @media screen and (min-width: 768px) {

//   //   }

//   //   @media screen and (min-width: 1440px) {

//   //   }
// `;
