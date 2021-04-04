import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { RequestContext } from "../context/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsTile = (props) => {
  const arrayColors = [
    "bg-blue-900",
    "bg-red-600",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
  ];

  const arrayColorsSecondary = [
    "bg-blue-800",
    "bg-red-700",
    "bg-yellow-600",
    "bg-green-600",
    "bg-blue-600",
  ];

  let history = useHistory();
  const { requestSingleArticle } = useContext(RequestContext);

  return (
    <Link
      to="/article/"
      onClick={() => {
        /*         history.push("/article/");
         */ requestSingleArticle(props.anchor);
      }}
      className={` ${props.anchor % 5 === 0 && "col-start-1 col-end-3"} ${
        arrayColors[props.anchor % 5]
      } lg:hover:${arrayColorsSecondary[props.anchor % 5]}`}
    >
      <div className="cursor-pointer lg:hover:text-gray-400 transform origin-center transition-all duration-500 lg:hover:scale-105">
        <LazyLoadImage
          className="px-6 pt-6 w-full text-white"
          src={props.picture}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
          }}
          alt="News Cover"
        />
        <div className={`p-6 h-full text-white `}>
          <h3 className="font-bold text-xl mb-3">
            {decodeURIComponent(props.title)}
          </h3>
          <p className="mb-3">{props.description}</p>
          <p className="italic text-sm font-bold uppercase">{props.author}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsTile;
