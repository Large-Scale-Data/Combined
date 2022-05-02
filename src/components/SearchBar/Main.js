import { useState } from 'react'
import { CgSearch } from 'react-icons/cg';

export const SearchBar = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
    if (searchInput.length > 0) {
    //       countries.filter((country) => {
    //       return country.name.match(searchInput);
    //   });
    }
    return <div class="search-box">
        <input
            class="search-txt"
            type="text"
            name=""
            placeholder="Type to search"
            onChange={handleChange}
            value={searchInput} />
        <a class="search-btn" href="#">
            <CgSearch></CgSearch>
        </a>
    </div>
}