import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar(props) {
  const [searchBar, setSearchBar] = useState({
    term: "",
    location: "",
    sortBy: "best_match",
  });

  console.log(searchBar);

  const getSortByClass = (sortByOptionValue) => {
    if (searchBar.sortBy === sortByOptionValue) {
      return "active";
    } else {
      return "";
    }
  };

  const renderSortByOption = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  const handleSortByChange = (sortByOptionValue) => {
    setSearchBar((prev) => ({
      ...prev,
      sortBy: sortByOptionValue,
    }));
  };

  const handleTermChange = ({ target }) => {
    setSearchBar((prev) => ({
      ...prev,
      term: target.value,
    }));
  };

  const handleLocationChange = ({ target }) => {
    setSearchBar((prev) => ({
      ...prev,
      location: target.value,
    }));
  };

  const handleSearch = (e) => {
    props.searchYelp(searchBar.term, searchBar.location, searchBar.sortBy);
    e.preventDefault();
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOption()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit" onClick={handleSearch}>
        <a>Let's Go</a>
      </div>
    </div>
  );
}

export default SearchBar;
