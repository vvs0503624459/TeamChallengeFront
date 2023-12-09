import {
  ResultsList,
  SearchLink,
  SearchResultDiv,
} from "./SearchResultList.styled";

type Props = {
  results: ItemSearch[];
  clearInput: () => void;
};
interface Specification {
  title: string;
  specifications: {
    title: string;
    value: string;
    diagonal: string;
    resolution: string;
    matrix: string;
    refreshrate: string;
    material: string;
    series: string;
    year: string;
    color: string;
    maintitle: string;
  }[];
}
interface ItemSearch {
  title: string;
  maintitle: string;
  id: string;
  specificationGroups: Specification[];
}
const SearchResultsList = ({ results, clearInput }: Props) => {
  const hasResults = results.length > 0;
  return (
    <ResultsList hasResults={hasResults}>
      {results.map((result, i) => (
        <SearchLink
          key={i}
          to={`/product/${result.id}`}
          onClick={clearInput}
        >
          <SearchResultDiv>{result.maintitle}</SearchResultDiv>
        </SearchLink>
      ))}
    </ResultsList>
  );
};

export default SearchResultsList;
