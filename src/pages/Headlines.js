/* eslint-disable array-callback-return */
import React, { useEffect, useContext, useState } from "react";
import NewsTile from "../components/NewsTile";
import { RequestContext } from "../context/axios";
import PageSelector from "../components/PageSelector";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Headlines = () => {
  const { articles } = useContext(RequestContext);
  const [pageFlag, setPageFlag] = useState("1");

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pageHandler = (flag) => {
    setPageFlag(flag);
    window.scrollTo(0, 0);
  };
  
  return articles.articles.length > 0 ? (
    <div className="flex flex-col lg:mt-10 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto md:grid md:grid-cols-3">
      {articles.articles.map(function (article, index) {
        if (pageFlag === "1") {
          return (
            index < 10 && (
              <NewsTile
                key={index}
                anchor={index}
                title={encodeURIComponent(article.title)}
                picture={article.urlToImage}
                description={article.description}
                author={article.source.name}
                url={article.url}
              />
            )
          );
        } else if (pageFlag === "2") {
          return (
            index >= 10 &&
            index < 20 && (
              <NewsTile
                key={index}
                anchor={index}
                title={encodeURIComponent(article.title)}
                picture={article.urlToImage}
                description={article.description}
                author={article.source.name}
                url={article.url}
              />
            )
          );
        } else if (pageFlag === "3") {
          return (
            index >= 20 &&
            index < 30 && (
              <NewsTile
                key={index}
                anchor={index}
                title={encodeURIComponent(article.title)}
                picture={article.urlToImage}
                description={article.description}
                author={article.source.name}
                url={article.url}
              />
            )
          );
        } else if (pageFlag === "4") {
          return (
            index >= 30 &&
            index < 40 && (
              <NewsTile
                key={index}
                anchor={index}
                title={encodeURIComponent(article.title)}
                picture={article.urlToImage}
                description={article.description}
                author={article.source.name}
                url={article.url}
              />
            )
          );
        }
      })}
      <PageSelector page={pageHandler} flag={pageFlag} />
    </div>
  ) : (
    <div className="flex text-gray-300 h-96 my-5">
      <div className="flex flex-col my-auto mx-auto">
        <HiOutlineEmojiSad className="mx-auto text-6xl mb-3" />
        <p>We found nothing about that....</p>
      </div>
    </div>
  );
};

export default Headlines;
