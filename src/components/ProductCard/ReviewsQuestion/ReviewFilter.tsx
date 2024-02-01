import SearchBar from "../../SearchBar/SearchBar";
import {
  ReviewFilters,
  SearchReviewFiltersRow,
} from "./ReviewsQuestion.styled";
import { useTranslation } from "react-i18next";
// type Props = {}

// const ReviewFilter = (props: Props) => {
const ReviewFilter = () => {
  const { t } = useTranslation();
  return (
    <SearchReviewFiltersRow>
      <SearchBar />
      {/* <ReviewFilters>Relevance</ReviewFilters> */}
      <ReviewFilters>{t("Newest")}</ReviewFilters>
      <ReviewFilters>{t("Best")}</ReviewFilters>
      <ReviewFilters>{t("Worst")}</ReviewFilters>
    </SearchReviewFiltersRow>
  );
};

export default ReviewFilter;
