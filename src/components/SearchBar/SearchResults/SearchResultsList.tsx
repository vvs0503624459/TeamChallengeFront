import styled from "styled-components";
import SearchResult from "./SearchResult";
export const ResultsList = styled.div<{ hasResults: boolean }>`
  display: ${(props) => (props.hasResults ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  // margin-top: 20px;
  border: 1px solid #ece7f2;
  border-radius: 12px;
  padding: 12px 24px;
  background-color: #fff;
`;
type Props = {
  results: ItemSearch[];
};
interface ItemSearch {
  name: string;
}
const SearchResultsList = ({ results }: Props) => {
  const hasResults = results.length > 0;
  return (
    <ResultsList hasResults={hasResults}>
      {results.map((result: ItemSearch, id: number) => (
        <SearchResult key={id} id={id} result={result} />
      ))}
    </ResultsList>
  );
};

export default SearchResultsList;
