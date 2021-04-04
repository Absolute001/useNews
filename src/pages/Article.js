import React, { useContext, useEffect } from "react";
import Iframe from "react-iframe";
import { RequestContext } from "../context/axios";

const Article = () => {
  const { singleArticle} = useContext(RequestContext);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Iframe
      url={singleArticle.url}
      className="w-full"
      height="1024px"
      sandbox="allow-same-origin"
    />
  );
};

export default Article;
