import styled from "styled-components";
interface ReviewsQuestionProps {
  reviewOrQuestion: boolean;
}
interface ShowAllImagesProps {
  showAllImages: boolean;
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
  background: var(--Tritiary-lightest-gray, #f2f4fa);
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
  position: relative;
  margin-bottom: 24px;
`;
export const Simulator = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #e0e4f0;
`;
export const ButtonTitle = styled.button<ReviewsQuestionProps>`
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
  border-bottom: ${(props) =>
    props.reviewOrQuestion ? "2px solid #5826DA" : ""};
`;
export const ReviewImagesWrap = styled.div<ReviewsQuestionProps>`
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
export const ReviewImagesBox = styled.div<ShowAllImagesProps>`
  display: flex;
  align-items: center;

  gap: 40px;
  flex-wrap: ${(props) => (props.showAllImages ? "nowrap" : "wrap")};
  overflow: hidden;
`;
export const ReviewImagesContainer = styled.img`
  min-width: calc(25% - 30px);
  object-fit: cover;
`;
export const ReviewAsideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--Primary-black, #1e1d21);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
export const ReviewAside = styled.div`
  width: 37%;
  // background-color: royalblue;
  justify-content: space-between;
`;
export const ReviewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 58%;
`;
export const SearchReviewFiltersRow = styled.div`
  display: flex;
  gap: 12px;
  &:first-child {
    // need to test
    width: 600px;
  }
`;
export const ReviewFilters = styled.button`
  padding: 9px 16px;
  border-radius: 12px;
  border: 1px solid var(--Tritiary-light-gray, #e0e4f0);
  opacity: 0.8;
`;
export const ReviewQuestionsWrap = styled.div<ReviewsQuestionProps>`
  display: ${(props) => (props.reviewOrQuestion ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
`;
// Review
export const ReviewItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  border-radius: 12px;
  background: var(--Tritiary-lightest-gray, #f2f4fa);
`;
export const ReviewHeaderFooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ReviewRateWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const ReviewImagesInnerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export const ReviewImagesInnerContainer = styled.img`
  min-width: calc(33% - 10px);
  object-fit: cover;
`;
export const ReplyUserButton = styled.button`
  color: var(--Primary-bright-purple, #5826da);
  border: none;
`;
export const ReviewItemToRateWrap = styled.div`
  display: flex;
  gap: 12px;
`;
export const AnswerItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px;
`;
export const AnswerWrap = styled.div`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--Primary-bright-purple, #5826da);
  color: var(--Primary-bright-purple, #5826da);
`;
export const AnswerHr = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  border-top: 1px double #e0e4f0;
`;
