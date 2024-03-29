import { Link } from "react-router-dom";
import styled from "styled-components";

// interface ResultsListProps {
//   hasResults: boolean;
// }
export const SearchResultDiv = styled.div`
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
/* export const ResultsList = styled.div<ResultsListProps>` */
/* display: ${(props) => (props.hasResults ? "block" : "none")}; */
/* display: block; */
export const ResultsList = styled.div`
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
