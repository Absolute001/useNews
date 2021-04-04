import React from "react";

const PageSelector = (props) => {
  return (
    <div className="w-full col-start-1 col-end-4 p-5 text-white 2xl:text-2xl">
      <div className="flex flex-col mx-auto w-full">
        <div className="text-center mb-5">
          <p>Navigate through pages:</p>
        </div>
        <div className="mx-auto">
          <button
            onClick={() => props.page("1")}
            className={`w-10 py-2 xl:w-20 mx-3 border ${
              props.flag === "1" && "bg-gray-900"
            } rounded `}
          >
            1
          </button>
          <button
            onClick={() => props.page("2")}
            className={`w-10 py-2 xl:w-20 mx-3 border ${
              props.flag === "2" && "bg-gray-900"
            } rounded `}
          >
            2
          </button>
          <button
            onClick={() => props.page("3")}
            className={`w-10 py-2 xl:w-20 mx-3 border ${
              props.flag === "3" && "bg-gray-900"
            } rounded `}
          >
            3
          </button>
          <button
            onClick={() => props.page("4")}
            className={`w-10 py-2 xl:w-20 mx-3 border ${
              props.flag === "4" && "bg-gray-900"
            } rounded `}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
