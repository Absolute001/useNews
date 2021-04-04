import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RequestContext } from "../context/axios";

const CategoryMenu = () => {
  const { headlinesRequestHandler } = useContext(RequestContext);

  return (
    <ul className="font-semibold p-5 grid grid-cols-3 w-full justify-center text-center text-gray-300 mx-auto text-sm 2xl:max-w-screen-lg 2xl:text-2xl md:text-md max-w-screen-sm">
      <Link to="/">
        <li
          onClick={() => {
            headlinesRequestHandler("business");
          }}
          className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-800 transition-colors duration-00 border-l border-t border-gray-900"
        >
          Economia
        </li>
      </Link>
      <Link to="/">
        <li
          onClick={() => {
            headlinesRequestHandler("sports");
          }}
          className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-800 transition-colors duration-00 border-l border-t border-gray-900"
        >
          Sport
        </li>
      </Link>
      <Link to="/">
        <li
          onClick={() => {
            headlinesRequestHandler("entertainment");
          }}
          className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-800 transition-colors duration-00 border-l border-r border-t border-gray-900"
        >
          Spettacolo
        </li>
      </Link>
      <Link to="/">
        <li
          onClick={() => {
            headlinesRequestHandler("science");
          }}
          className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-800 transition-colors duration-00 border-t border-l border-b border-gray-900"
        >
          Scienza
        </li>
      </Link>
      <Link to="/">
        <li
          onClick={() => {
            headlinesRequestHandler("technology");
          }}
          className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-800 transition-colors duration-00 border-t border-l border-b border-gray-900"
        >
          Tecnologia
        </li>
      </Link>
      <Link to="/">
        <li
          onClick={() => {
            headlinesRequestHandler("health");
          }}
          className="p-2 cursor-pointer hover:bg-gray-700 bg-gray-800 transition-colors duration-00 border-t border-l border-b border-r border-gray-900"
        >
          Salute
        </li>
      </Link>
    </ul>
  );
};

export default CategoryMenu;
