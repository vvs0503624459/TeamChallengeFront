import { useState, useEffect } from "react";
import { SearchInputField } from "./SearchInput.styled";
import { useDebounce } from "../../../redux/hooks/useDebounce";
import SearchResultsList from "../SearchResults/SearchResultsList";
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

export const SearchInput = () => {
  const [results, setResults] = useState<ItemSearch[]>([]);
  const [input, setInput] = useState("");
  const searchDebounce = useDebounce({ value: input, delay: 500 });

  useEffect(() => {
    const fetchData = async (value: string) => {
      try {
        // const jsonPath = "https://jsonplaceholder.typicode.com/users";
        const jsonPath = "../../src/data/general.json";
        // const jsonPath = "./device_demo.json";

        const response = await fetch(jsonPath);

        const json = await response.json();
        const results = json.filter((obj: ItemSearch) =>
          value
            .toLowerCase()
            .split(" ")
            .every((word) =>
              obj.specificationGroups.some((group) =>
                group.specifications.some((spec) =>
                  Object.values(spec).some(
                    (value) =>
                      typeof value === "string" &&
                      value.toLowerCase().includes(word)
                  )
                )
              )
            )
        );
        setResults(results);
        // console.log(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (input !== "" && searchDebounce) {
      fetchData(input);
    } else {
      setResults([]);
    }
  }, [input, searchDebounce]);
  const searchClick = () => {
        setInput("");
  };
  return (
    <>
      <SearchInputField
        type="text"
        placeholder="Search.."
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <SearchResultsList results={results} clearInput={searchClick} />
    </>
  );
};

export default SearchInput;
