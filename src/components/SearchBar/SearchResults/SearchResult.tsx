import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchResultDiv = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #aea8b7;
  &:hover {
    color: #5826da;
    background-color: #efefef;
  }
`;
export const SearchLink = styled(Link)`
  text-decoration: none;
  text-align: left;
`;

interface ItemSearch {
  name: string;
  email: string;
  phone: string;
  title: string;
  diagonal: string;
  resolution: string;
  matrix: string;
  refreshrate: string;
  material: string;
  series: string;
  year: string;
  color: string;
  maintitle: string;
}
type Props = {
  id: number;
  result: ItemSearch;
};

const SearchResult = ({ id, result }: Props) => {
  return (
    <SearchLink to={`/product/${id}`}>
      <SearchResultDiv>{result.maintitle}</SearchResultDiv>
    </SearchLink>
  );
};

export default SearchResult;
