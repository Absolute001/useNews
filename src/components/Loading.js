import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="bg-loading flex h-screen w-screen">
      <div className="flex flex-row mx-auto my-auto text-center w-sm bg-gray-800 p-3">
        <h1 className="text-xl md:text-4xl text-white mr-3">Loading latest news</h1>
        <AiOutlineLoading3Quarters className="text-xl md:text-4xl animate-spin-slow text-white" />
      </div>
    </div>
  );
};

export default Loading;
