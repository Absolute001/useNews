import React, { useContext } from "react";
import Headlines from "./pages/Headlines";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Article from "../src/pages/Article";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { RequestContext } from "./context/axios";

function App() {
  const { articles } = useContext(RequestContext);

  return articles ? (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Headlines />
        </Route>
        <Route path="/search/results">
          <Headlines />
        </Route>
        <Route path="/article/">
          <Article />
        </Route>
      </Switch>
      <Footer />
    </main>
  ) : (
    <Loading />
  );
}

export default App;
