import { SortType } from "../../../redux/hooks/sorters";
import SearchBar from "../../SearchBar/SearchBar";

import {
  ReviewFilters,
  SearchReviewFiltersRow,
} from "./ReviewsQuestion.styled";
import { useTranslation } from "react-i18next";
type Props = {
  setCurrentSorter: (value: SortType) => void;
  reviewOrQuestion: boolean;
}

const ReviewFilter = ({ setCurrentSorter, reviewOrQuestion }: Props) => {
// const ReviewFilter = () => {
  const { t } = useTranslation();
  return (
    <SearchReviewFiltersRow>
      <SearchBar />
      {/* <ReviewFilters>Relevance</ReviewFilters> */}
      <ReviewFilters onClick={() => setCurrentSorter(SortType.DESCENDING_DATE)}>{t("Newest")}</ReviewFilters>
      {reviewOrQuestion && <ReviewFilters onClick={() => setCurrentSorter(SortType.DESCENDING_RATING)}>{t("Best")}</ReviewFilters>}
      {reviewOrQuestion && <ReviewFilters onClick={() => setCurrentSorter(SortType.ASCENDING_RATING)} >{t("Worst")}</ReviewFilters>}
    </SearchReviewFiltersRow>
  );
};

export default ReviewFilter;
