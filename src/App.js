import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Tabs from "./components/Tabs/Tabs";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Tabs} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
