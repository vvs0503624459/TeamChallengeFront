import { Search } from "../../assets/Icons";
import SearchInput from "./SearchInput/SearchInput";
// import { useState } from "react";
// import SearchResultsList from "./SearchResults/SearchResultsList";
import styled from "styled-components";

 const SearchWrapper = styled.div`
   display: flex;
   width: 447px;
   padding: 9px 16px;
   justify-content: flex-start;
   align-items: center;
   gap: 10px;
   border-radius: 12px;
   border: 1px solid #e0e4f0;
   position: relative;
 `;
//  interface Specification {
//   title: string;
//   specifications: {
//     title: string;
//     value: string;
//     diagonal: string;
//     resolution: string;
//     matrix: string;
//     refreshrate: string;
//     material: string;
//     series: string;
//     year: string;
//     color: string;
//     maintitle: string;
//   }[];
// }

// interface ItemSearch {
//   title: string;
//   diagonal: string;
//   resolution: string;
//   matrix: string;
//   refreshrate: string;
//   material: string;
//   series: string;
//   year: string;
//   color: string;
//   maintitle: string;
//   id: string;
//   specificationGroups: Specification[];
// }

const SearchBar = () => {

      // const [isResultsActive, setIsResultsActive] = useState(false);
      // const ref = useRef(null);
      // const isResultsOpen = isResultsActive && results && results.length > 0;

      // useOutsideClick(() => setIsResultsActive(false), ref);
  return (
    <SearchWrapper>
      <Search />
      <SearchInput
        // setResults={
        //   setResults as React.Dispatch<React.SetStateAction<ItemSearch[]>>
        // }
      />

    </SearchWrapper>
  );
};

export default SearchBar;
