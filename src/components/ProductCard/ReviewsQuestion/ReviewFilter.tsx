
import SearchBar from '../../SearchBar/SearchBar';
import { ReviewFilters, SearchReviewFiltersRow } from './ReviewsQuestionstyled';

// type Props = {}

// const ReviewFilter = (props: Props) => {
const ReviewFilter = () => {
  return (
    <SearchReviewFiltersRow>
      <SearchBar />
      <ReviewFilters>Relevance</ReviewFilters>
      <ReviewFilters>Newest</ReviewFilters>
      <ReviewFilters>Best</ReviewFilters>
      <ReviewFilters>Worst</ReviewFilters>
    </SearchReviewFiltersRow>
  );
}

export default ReviewFilter