import { BsFillSearchHeartFill } from "react-icons/bs";

const SearchBar = ({
  searchQuery,
  onSearchChange,
}: {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}) => {
  return (
    <div className="searchBar">
      <div>
        <BsFillSearchHeartFill />
      </div>
      <div className="search">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Find your entertainment here.."
        />
      </div>
    </div>
  );
};

export default SearchBar;
