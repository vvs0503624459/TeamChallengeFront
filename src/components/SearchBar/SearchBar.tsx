import { Search } from "../IconComponents/IconsCatalogue";
import SearchInput from "./SearchInput/SearchInput";
import { useState } from "react";
import SearchResultsList from "./SearchResults/SearchResultsList";
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


interface ItemSearch {
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

const SearchBar = () => {
  const [results, setResults] = useState<ItemSearch[]>([]);
  return (
    <SearchWrapper>
      <Search />
      <SearchInput
        setResults={
          setResults as React.Dispatch<React.SetStateAction<ItemSearch[]>>
        }
      />
      <SearchResultsList results={results} />
    </SearchWrapper>
  );
};

export default SearchBar;
