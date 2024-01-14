import { IconMinus, IconPlus, IconThumbsDown, IconThumbsUp, IconThumbsVector } from "../../IconComponents/IconsCatalogue";
import StarRatingFixed from "../../StarRating/StarRatingFixed";
import { Review } from "./ReviewsQuestion";
import {
  ReplyUserButton,
  ReviewHeaderFooterWrap,
  ReviewImagesInnerContainer,
  ReviewImagesInnerWrap,
  ReviewItemToRateWrap,
  ReviewItemWrap,
  ReviewRateWrap,
} from "./ReviewsQuestionstyled";

type Props = {
  reviews: Review[] | null;
};

const Reviews = ({ reviews }: Props) => {
  return (
    <>
      {reviews && (
        <>
          {reviews.map((obj: Review) => (
            <ReviewItemWrap key={obj.comment.id}>
              <ReviewHeaderFooterWrap>
                <ReviewRateWrap>
                  <StarRatingFixed rating={Number(obj.rating)} />
                  {obj.comment.userInfo}
                </ReviewRateWrap>
                {obj.comment.creatingDate}
              </ReviewHeaderFooterWrap>
              <p>{obj.comment.message}</p>
              <div>
                <IconPlus />
                <p>{obj.pluses}</p>
              </div>
              <div>
                <IconMinus />
                <p>{obj.minuses}</p>
              </div>

              {obj.photosUri && (
                <ReviewImagesInnerWrap>
                  {obj.photosUri.map((image: string, i: number) => (
                    <ReviewImagesInnerContainer
                      src={image}
                      key={i}
                      alt="item-photo"
                    />
                  ))}
                </ReviewImagesInnerWrap>
              )}

              <ReviewHeaderFooterWrap>
                <ReplyUserButton>Reply {obj.comment.userInfo}</ReplyUserButton>
                <ReviewItemToRateWrap>
                  <IconThumbsUp />
                  <IconThumbsVector />
                  <IconThumbsDown />
                </ReviewItemToRateWrap>
              </ReviewHeaderFooterWrap>
            </ReviewItemWrap>
          ))}
        </>
      )}
    </>
  );
};

export default Reviews;
