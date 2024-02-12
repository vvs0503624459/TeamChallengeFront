// import { Review } from "../../components/ProductCard/ReviewsQuestion/ReviewsQuestion";
import { useState, useEffect } from "react";
type CommentedEntity = {
  comment: {
    creatingDate: string;
  };
  rating?: number;
};

// type Props = {
//   a: CommentedEntity,
//   b: CommentedEntity,
// };


const descendingDate = function (a: CommentedEntity,
  b: CommentedEntity,) {

  let x = a.comment.creatingDate.split(".")
  let y = b.comment.creatingDate.split(".")

  let dateA = new Date().setFullYear(+x[2], (+x[1] - 1), +x[0]);
  let dateB = new Date().setFullYear(+y[2], (+y[1] - 1), +y[0]);

  return dateB - dateA;
}

const descendingRating = function (a: CommentedEntity,
  b: CommentedEntity,) {

  let x = a.rating ? +a.rating : 0
  let y = b.rating ? +b.rating : 0

  return y - x;
}
const ascendingRating = function (a: CommentedEntity,
  b: CommentedEntity,) {

  let x = a.rating ? +a.rating : 0
  let y = b.rating ? +b.rating : 0

  return x - y;
}

 export enum SortType {
  DESCENDING_DATE = "DESCENDING_DATE",
  DESCENDING_RATING = "DESCENDING_RATING",
  ASCENDING_RATING = "ASCENDING_RATING",
}
export const useSorter = (value: SortType) => {
  const [sorter, setSorter] = useState(() => descendingDate);
// const selectedSortFunction = sorter === SortType.DESCENDING_DATE ? descendingDate : (sorter === SortType.DESCENDING_RATING ? descendingRating : ascendingRating);

  useEffect(() => {
    const selectedSortFunction = value === SortType.DESCENDING_DATE
      ? descendingDate
      : value === SortType.DESCENDING_RATING
        ? descendingRating
        : ascendingRating;
    setSorter(() => selectedSortFunction)
}, [value]);
return sorter;
}