import styled from "styled-components";
interface ResultsListProps {
  reviewOrQuestion: boolean;
}

export const StarsFormsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
`;
export const StarsContainer = styled.div`
  display: flex;
  padding: 6px 16px;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  border: 1px solid #e0e4f0;
`;
export const StarsNumber = styled.h4`
  font-family: Inter;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  color: #1e1d21;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ButtonEmpty = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--Primary-bright-purple, #5826da);
  border-radius: 12px;
  border: 2px solid var(--Primary-bright-purple, #5826da);
  background-color: var(--Primary-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  &:hover {
    color: var(--Secondary-dark-purple, #4117ad);
    border: 2px solid var(--Secondary-dark-purple, #4117ad);
    background-color: var(--Tritiary-lightest-gray, #f9fafe);
  }
`;
export const ButtonFilled = styled.button`
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background-color: var(--Primary-bright-purple, #5826da);
  color: var(--Primary-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  &:hover {
    background-color: var(--Secondary-dark-purple, #4117ad);
  }
`;

export const TagsWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;
export const Tags = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background-color: var(--Tritiary-lightest-gray, #f9fafe);
  color: #1e1d21;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
export const ButtonTitlesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
`;
export const ButtonTitle = styled.button<ResultsListProps>`
  border: none;
  background: none;
  color: ${(props) =>
    props.reviewOrQuestion
      ? "var(--Primary-bright-purple, #5826DA)"
      : "var(--Primary-black, #1E1D21)"};
  font-family: Inter;
  font-size: 20px;
  font-weight: ${(props) => (props.reviewOrQuestion ? "600" : "400")};
  line-height: 26px;
`;
export const ReviewImagesWrap = styled.div<ResultsListProps>`
  flex-direction: column;
  gap: 24px;
  margin-bottom: 60px;
  display: ${(props) => (props.reviewOrQuestion ? "flex" : "none")};
`;
export const ReviewImagesTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ReviewImagesHeader = styled.h5`
  color: #1e1d21;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;
export const ReviewImagesBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;
export const ReviewImagesContainer = styled.img`
  width: 280px;
  height: 188px;
  object-fit: cover;
`;
