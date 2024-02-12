import { SortType, useSorter} from "../../../redux/hooks/sorters";
import {
  IconMinus,
  IconPlus,
  IconThumbsDown,
  IconThumbsUp,
  IconThumbsVector,
} from "../../IconComponents/IconsCatalogue";
import StarRating from "../../StarRating/StarRating";
import { Review } from "./ReviewsQuestion";
import {
  ReplyUserButton,
  ReviewHeaderFooterWrap,
  ReviewImagesInnerContainer,
  ReviewImagesInnerWrap,
  ReviewItemToRateWrap,
  ReviewItemWrap,
  ReviewRateWrap,
} from "./ReviewsQuestion.styled";
import { useTranslation } from "react-i18next";
type Props = {
  reviews: Review[] | null;
  currentSorter: SortType;
};

const Reviews = ({ reviews, currentSorter }: Props) => {
  // const value = SortType.DESCENDING_DATE;
  const sorter = useSorter(currentSorter)
  const { t } = useTranslation();
  return (
    <>
      {reviews && (
        <>
          {reviews.sort(sorter).map((obj: Review) => (
            <ReviewItemWrap key={obj.comment.id}>
              <ReviewHeaderFooterWrap>
                <ReviewRateWrap>
                  <StarRating readonly={true} rate={Number(obj.rating)} size={32} />
                  {obj.comment.userInfo}
                </ReviewRateWrap>
                {obj.comment.creatingDate}
              </ReviewHeaderFooterWrap>
              {obj.tags.length>0 && <p>{obj.tags.map(tag => <span key={tag}>{tag}</span> )}</p>}
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
                <ReplyUserButton>
                  {t("Reply")} {obj.comment.userInfo}
                </ReplyUserButton>
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
