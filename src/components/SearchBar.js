import React, { useContext, useState } from "react";
import { RequestContext } from "../context/axios";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [searchBarState, setSearchBarState] = useState("");
  const { handleSearchSubmit } = useContext(RequestContext);
  let history = useHistory();

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchBarState(value);
  };

  return (
    <div className="text-gray-900">
      <form
        className="flex-wrap flex mx-auto mb-5 px-5 max-w-screen-sm 2xl:max-w-screen-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchSubmit(searchBarState);
          setSearchBarState("");
          history.push("/search/results");
        }}
      >
        <input
          onChange={handleChange}
          className="h-8 p-2 w-4/6 md:w-5/6"
          type="text"
          placeholder="Search articles"
          value={searchBarState}
        ></input>
        <button
          className="text-white text-sm font-bold flex-grow ml-2 h-8 bg-blue-500 "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
