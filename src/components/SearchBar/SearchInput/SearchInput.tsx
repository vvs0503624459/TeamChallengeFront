import { useState, useEffect } from "react";
import { SearchInputField } from "./SearchInput.styled";
import { useDebounce } from "../../../redux/hooks/useDebounce";
interface ItemSearch {
  name: string;
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
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        const results = json.filter((item: ItemSearch) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
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
