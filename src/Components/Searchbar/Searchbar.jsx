import data from "../../../public/data";
import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import "./Searchbar.css";

const Searchbar = () => {
  console.log(data);
  //   useState und useEffect
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  //   Placeholder onFocus leeren/füllen
  const handleFocus = () => {
    setPlaceholderVisible(false);
  };
  const handleBlur = () => {
    setPlaceholderVisible(true);
    setFilteredData([""]);
  };
  //   Suche aller Gerichte
  const searchAll = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredData);
    console.log(filteredData);
  };

  return (
    <section className="searchbar">
      <div className="searchbar-box">
        <SearchRoundedIcon />
        <input
          onChange={searchAll}
          value={searchInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholderVisible ? "Search" : ""}
          type="text"
          name="searchbar"
          autoComplete="off"
        />
        <div
          id="results-search"
          className={searchInput < 1 ? "hidden" : "suggestions"}
        >
          {filteredData.length > 0 ? (
            filteredData.map((meal) => <Link key={meal.id}>{meal.name}</Link>)
          ) : (
            <p>No results</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
