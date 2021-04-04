import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "../components/CategoryMenu";
import { FaRegNewspaper } from "react-icons/fa";
import { RequestContext } from "../context/axios";
import SearchBar from "./SearchBar";

const Header = () => {
  const { headlinesRequestHandler } = useContext(RequestContext);

  return (
    <>
      <div className="flex flex-col shadow-md w-full bg-gray-900">
        <Link
          to="/"
          className="text-4xl flex flex-row mx-auto text-white mt-5"
        >
          <h1
            onClick={() => {
              headlinesRequestHandler("general");
            }}
          >
            useNews
          </h1>
          <FaRegNewspaper className="ml-3" />
        </Link>
        <CategoryMenu />
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
