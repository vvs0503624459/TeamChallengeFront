import { Search } from "../IconComponents/IconsCatalogue";
import { SearchWrapper } from "./SearchBar.styled";
import SearchInput from "./SearchInput/SearchInput";

const SearchBar = () => {

  return (
    <SearchWrapper>
      <Search />
      <SearchInput />
    </SearchWrapper>
  );
};

export default SearchBar;
