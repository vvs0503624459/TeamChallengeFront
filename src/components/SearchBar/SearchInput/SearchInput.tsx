import { SearchInputField } from "./SearchInput.styled";


export const SearchInput = () => {
  return <SearchInputField type="text" placeholder="Search.." />;
};




export default SearchInput;


// import styles from "./SearchInput.module.scss";
// import { useDebounce } from "../../../../hooks/useDebounce";
// import { useEffect, useState } from "react";
// import cs from "classnames";

// export const SearchInput = ({ setResults, className, openResults }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   useEffect(() => {
//     // search the api

//     async function fetchData() {
//       // setLoading(true);
//       console.log("Fetch data");

//       setResults([]);

//       const data = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       ).then((response) => response.json());

//       setResults(data);
//       console.log(data);
//       // setLoading(false);
//     }

//     console.log(debouncedSearchTerm);
//     if (debouncedSearchTerm) {
//       fetchData();
//     } else {
//       setResults([]);
//     }
//   }, [debouncedSearchTerm]);

//   return (
//     <input
//       type="text"
//       placeholder="Search.."
//       className={cs(styles.input, className)}
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       onClick={openResults}
//     />
//   );
// };


