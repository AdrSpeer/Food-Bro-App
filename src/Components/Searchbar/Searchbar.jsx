import data from "../../../public/data";
import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import "./Searchbar.css";

const Searchbar = () => {
  console.log(data);
  //   useState und useEffect
  const [searchInput, setSearchInput] = useState("");
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  //   Placeholder onFocus leeren/füllen
  const handleFocus = () => {
    setPlaceholderVisible(false);
  };
  const handleBlur = () => {
    setPlaceholderVisible(true);
  };

  return (
    <section className="searchbar">
      <div className="searchbox">
        <SearchRoundedIcon />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholderVisible ? "Search" : ""}
          type="text"
          name="searchbar"
        />
      </div>
    </section>
  );
};

export default Searchbar;
