import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StarRatingFixed from "../../StarRating/StarRatingFixed";
import phone from "../../../data/phone.json";
import {
  ButtonContainer,
  ButtonEmpty,
  ButtonFilled,
  ButtonTitle,
  ButtonTitlesContainer,
  ReviewImagesBox,
  ReviewImagesContainer,
  ReviewImagesHeader,
  ReviewImagesTitleWrap,
  ReviewImagesWrap,
  ReviewAsideContainer,
  ReviewMainContainer,
  Simulator,
  StarsContainer,
  StarsFormsWrap,
  StarsNumber,
  Tags,
  TagsWrap,
  ReviewAside,
  ReviewQuestionsWrap,
} from "./ReviewsQuestion.styled";
import {
  ReviewStar,
  QuestionTag,
  ShowAllImages,
} from "../../IconComponents/IconsCatalogue";
import ReviewFilter from "./ReviewFilter";
import Reviews from "./Reviews";
import Questions, { Question } from "./Questions";
// https://run.mocky.io/v3/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f
// https://designer.mocky.io/manage/delete/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f/IMvtgVX3J9gcGVLF4EINejOZRE7ZCVoz0QgQ
export type Review = {
  id: string;
  rating: number;
  pluses: string;
  minuses: string;
  comment: {
    id: string;
    message: string;
    creatingDate: string;
    userInfo: string;
    answer: string;
  };
  tags: string[];
  photosUri: string[];
  countOfLikes: number;
  countOfDislikes: number;
};
import { useTranslation } from "react-i18next";
import ReviewAsideDevice from "./ReviewAsideDevice";
const ReviewsQuestion = () => {
  const { id } = useParams();
  const [tags, setTags] = useState<string[]>([]);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [reviewOrQuestion, setReviewOrQuestion] = useState(true);
  const changeReviewOrQuestion = (value: boolean): void => {
    setReviewOrQuestion(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const jsonPath =
        //   "https://run.mocky.io/v3/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f";
        const jsonPath = "../../src/data/reviews.json";
        const response = await fetch(jsonPath);

        const json = await response.json();
        const foundReview = json.filter((obj: Review) => obj.id === id);
        if (foundReview) {
          setReviews(foundReview);
          const allTags = Array.from(
            new Set(
              foundReview.flatMap(
                (review: Review) => review.tags
              ) as unknown as string[]
            )
          );
          // console.log("All Tags:", allTags);
          setTags(allTags);
        } else {
          console.warn(`Review with id ${id} not found.`);
        }
        const jsonPathQuestions = "../../src/data/questions.json";
        const responseQuestions = await fetch(jsonPathQuestions);

        const jsonQuestions = await responseQuestions.json();
        const foundQuestion = jsonQuestions.filter(
          (obj: Question) => obj.id === id
        );
        if (foundQuestion) {
          setQuestions(foundQuestion);
        } else {
          console.warn(`Question with id ${id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }

//       if (reviews || questions) {
//   comments = (reviews.length || 0 ) + (questions.length || 0 );
// };
    };
    fetchData();
  }, [id]);

  const [showAllImages, setShowAllImages] = useState(true);
  const changeShowAllImages = () => {
    setShowAllImages((state) => !state);
  };
  const { t } = useTranslation();
            let comments: number = 0;


// const comments: number = (reviews.length || questions.length) ? (reviews.length || 0 ) + (questions.length || 0 ) : undefined ;
// console.log("Total_comments:", comments);
//   console.log("Total_reviews:", reviews);
//     console.log("Total_questions:", questions);
  return (
    <>
      <StarsFormsWrap>
        <StarsContainer>
          <StarsNumber>
            {phone.find((item) => item.id === id)!.stars}
          </StarsNumber>
          <StarRatingFixed
            rating={Number(phone.find((item) => item.id === id)!.stars)}
            readonly={true}
          />
        </StarsContainer>
        <ButtonContainer>
          <ButtonEmpty>
            <QuestionTag />
            {t("Ask a Question")}
          </ButtonEmpty>
          <ButtonFilled>
            <ReviewStar />
            {t("Leave a Review")}
          </ButtonFilled>
        </ButtonContainer>
      </StarsFormsWrap>
      <TagsWrap>
        {reviews && (
          <>
            {tags.map((tag: string, i) => (
              <Tags key={i}>{t(tag)}</Tags>
            ))}
          </>
        )}
      </TagsWrap>
      <ButtonTitlesContainer>
        <ButtonTitle
          reviewOrQuestion={reviewOrQuestion}
          onClick={() => changeReviewOrQuestion(true)}
        >
          {t("Reviews")} ({reviews && reviews.length})
        </ButtonTitle>
        <ButtonTitle
          reviewOrQuestion={reviewOrQuestion ? false : true}
          onClick={() => changeReviewOrQuestion(false)}
        >
          {t("Questions")} ({questions && questions.length})
        </ButtonTitle>
        <Simulator></Simulator>
      </ButtonTitlesContainer>
      <ReviewImagesWrap reviewOrQuestion={reviewOrQuestion}>
        <ReviewImagesTitleWrap>
          <ReviewImagesHeader>{t("Reviews with images")}</ReviewImagesHeader>
          <ButtonEmpty onClick={changeShowAllImages}>
            <ShowAllImages />
            {t("Show All")}
          </ButtonEmpty>
        </ReviewImagesTitleWrap>
        <ReviewImagesBox showAllImages={showAllImages}>
          {reviews && (
            <>
              {(
                reviews.flatMap(
                  (review: Review) => review.photosUri
                ) as unknown as string[]
              ).map((image: string, i: number) => (
                <ReviewImagesContainer src={image} key={i} alt="item-photo" />
              ))}
            </>
          )}
        </ReviewImagesBox>
      </ReviewImagesWrap>
      <ReviewAsideContainer>
        <ReviewAside>
          <ReviewAsideDevice id={id} comments={ (reviews && reviews.length ) + (questions && questions.length )}/>
        </ReviewAside>
        <ReviewMainContainer>
          <ReviewFilter />
          <ReviewQuestionsWrap reviewOrQuestion={reviewOrQuestion}>
            <Reviews reviews={reviews} />
          </ReviewQuestionsWrap>
          <ReviewQuestionsWrap reviewOrQuestion={!reviewOrQuestion}>
            <Questions
              // id={id}
              questions={questions}
            />
          </ReviewQuestionsWrap>
        </ReviewMainContainer>
      </ReviewAsideContainer>
    </>
  );
};
export default ReviewsQuestion;
