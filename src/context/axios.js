/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect } from "react";
import axios from "axios";

const RequestContext = createContext();

const RequestContextProvider = (props) => {
  const [articles, setArticles] = useState(null);
  const [singleArticle, setSingleArticle] = useState(null);
  const Key = process.env.REACT_APP_NEWS_API_KEY;

  const ipLookUp = async () => {
    const ipData = await axios
      .get("https://checkip.amazonaws.com/", {
        headers: {
          "Access-Control-Allow-Origin":
            "https://elated-fermat-1bdef7.netlify.app/",
        },
      })
      .then((res) => res.data);

    const countryCode = await axios
      .get(`https://ip-api.com/json/${ipData}`, {
        headers: {
          "Access-Control-Allow-Origin":
            "https://elated-fermat-1bdef7.netlify.app/",
        },
      })
      .then((res) => res.data.countryCode);

    return countryCode;
  };

  const headlinesRequestHandler = async (inputCategory) => {
    const countryCode = await ipLookUp().then((data) => data);
    const options = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
      params: {
        country: countryCode,
        category: inputCategory,
        apiKey: Key,
        pageSize: 40,
      },
    };

    setArticles(null); // to showing the Loading at category ghange
    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
        localStorage.setItem("news", JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  };

  const handleSearchSubmit = async (searchBarState) => {
    const countryCode = await ipLookUp().then((data) => data);
    const options = {
      method: "GET",
      url: "https://newsapi.org/v2/everything",
      params: {
        q: searchBarState,
        language: countryCode.toLowerCase(),
        apiKey: Key,
        pageSize: 40,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
        localStorage.setItem("news", JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  };

  const requestSingleArticle = (anchor) => {
    setSingleArticle(articles.articles[anchor]);
    localStorage.setItem("article", JSON.stringify(articles.articles[anchor]));
  };

  /*This Use Effect prevents the app crashing on reload */
  useEffect(() => {
    if (articles === null) {
      headlinesRequestHandler();
    } else {
      setArticles(JSON.parse(localStorage.getItem("news")));
    }
    setSingleArticle(JSON.parse(localStorage.getItem("article")));
  }, []);

  return (
    <RequestContext.Provider
      value={{
        headlinesRequestHandler,
        articles,
        setArticles,
        singleArticle,
        setSingleArticle,
        handleSearchSubmit,
        requestSingleArticle,
      }}
    >
      {props.children}
    </RequestContext.Provider>
  );
};

export { RequestContext, RequestContextProvider };
