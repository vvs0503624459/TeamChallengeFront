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
  StarsContainer,
  StarsFormsWrap,
  StarsNumber,
  Tags,
  TagsWrap,
} from "./ReviewsQuestionstyled";
import {
  ReviewStar,
  Question,
  ShowAllImages,
} from "../../IconComponents/IconsCatalogue";
// https://run.mocky.io/v3/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f
// https://designer.mocky.io/manage/delete/6f3be700-72d1-46f3-9b3e-4e3a832c8a9f/IMvtgVX3J9gcGVLF4EINejOZRE7ZCVoz0QgQ
type Review = {
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
  }[];
  tags: string[];
  photosUri: string[];
  countOfLikes: number;
  countOfDislikes: number;
};
// type Props = {
//   reviewOrQuestion: boolean;
//   changeReviewOrQuestion: (value: boolean) => void;
// };

const ReviewsQuestion = () => {
  const { id } = useParams();
  const [tags, setTags] = useState<string[]>([]);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  // const [reviewOrQuestion, setReviewOrQuestion] =
  // const [newReview, setNewReview] = useState<Review>([]);
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  // console.log(reviews);
  const [reviewOrQuestion, setReviewOrQuestion] = useState(true);

  const changeReviewOrQuestion = (value: boolean): void => {
    setReviewOrQuestion(value);
  };
  return (
    <>
      <StarsFormsWrap>
        <StarsContainer>
          <StarsNumber>
            {phone.find((item) => item.id === id)!.stars}
          </StarsNumber>
          <StarRatingFixed
            rating={Number(phone.find((item) => item.id === id)!.stars)}
          />
        </StarsContainer>
        <ButtonContainer>
          <ButtonEmpty>
            <Question />
            Ask a Question
          </ButtonEmpty>
          <ButtonFilled>
            <ReviewStar />
            Leave a Review
          </ButtonFilled>
        </ButtonContainer>
      </StarsFormsWrap>
      <TagsWrap>
        {reviews && (
          <>
            {tags.map((tag: string, i) => (
              <Tags key={i}>{tag}</Tags>
            ))}
          </>
        )}
      </TagsWrap>
      <ButtonTitlesContainer>
        <ButtonTitle
          reviewOrQuestion={reviewOrQuestion}
          onClick={() => changeReviewOrQuestion(true)}
        >
          Reviews (300)
        </ButtonTitle>
        <ButtonTitle
          reviewOrQuestion={reviewOrQuestion ? false : true}
          onClick={() => changeReviewOrQuestion(false)}
        >
          Questions (12)
        </ButtonTitle>
      </ButtonTitlesContainer>
      <ReviewImagesWrap reviewOrQuestion={reviewOrQuestion}>
        <ReviewImagesTitleWrap>
          <ReviewImagesHeader>Reviews with images</ReviewImagesHeader>
          <ButtonEmpty>
            <ShowAllImages />
            Show All
          </ButtonEmpty>
        </ReviewImagesTitleWrap>
        <ReviewImagesBox>
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
    </>
  );
};
export default ReviewsQuestion;
