import React from "react";

import "./styles/style.css";

import Header from "./components/Header";
import News from "./components/News";
import { HashRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NewsItem from "./components/NewsItem";

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <News pageSize={7} category="all" />
          </Route>
          <Route exact path="/sport">
            <News pageSize={10} category="sport" />
          </Route>
          <Route exact path="/world">
            <News pageSize={10} category="world" />
          </Route>
          <Route exact path="/covid">
            <News pageSize={10} category="covid" />
          </Route>
          <Route exact path="/business">
            <News pageSize={10} category="business" />
          </Route>
          <Route exact path="/politics">
            <News pageSize={10} category="politics" />
          </Route>
          <Route exact path="/science">
            <News pageSize={10} category="science" />
          </Route>
          <Route exact path="/religion">
            <News pageSize={10} category="religion" />
          </Route>
          <Route exact path="/health">
            <News pageSize={10} category="health" />
          </Route>
          <Route exact path="/trending">
            <News pageSize={10} category="trending" />
          </Route>

          <Route exact path="/news/:id+">
            <NewsItem />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
