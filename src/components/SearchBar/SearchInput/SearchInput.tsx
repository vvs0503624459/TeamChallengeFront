import { useState, useEffect } from "react";
import { SearchInputField } from "./SearchInput.styled";
import { useDebounce } from "../../../redux/hooks/useDebounce";

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
type Props = {
  setResults: React.Dispatch<React.SetStateAction<ItemSearch[]>>;
};
export const SearchInput = ({ setResults }: Props) => {
  const [input, setInput] = useState("");
  const searchDebounce = useDebounce({ value: input, delay: 500 });

  useEffect(() => {
    const fetchData = async (value: string) => {
      try {
        // const jsonPath = "https://jsonplaceholder.typicode.com/users";
        const jsonPath = "/src/data/general.json";

        const response = await fetch(jsonPath);

        const json = await response.json();
        const results = json.filter((obj: ItemSearch) =>
          value
            .toLowerCase()
            .split(" ")
            .every((word) =>
              Object.values(obj).some(
                (propValue) =>
                  typeof propValue === "string" &&
                  propValue.toLowerCase().includes(word)
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

  return (
    <SearchInputField
      type="text"
      placeholder="Search.."
      value={input}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInput(e.target.value)
      }
    />
  );
};

export default SearchInput;
