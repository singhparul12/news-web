import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./components/Top";
import Entertainment from "./components/Entertainment";
import Sports from "./components/Sports";
import Business from "./components/Business";
import Health from "./components/Health";
import "./components/news.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Technology from "./components/Technology";
// import "bootstrap/dist/css/bootstrap.min.css";
require("dotenv").config();
export default () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/Search/:sid" exact component={Search} />
          <Route path="/Entertainment" exact component={Entertainment} />
          <Route path="/Sports" exact component={Sports} />
          <Route path="/Business" exact component={Business} />
          <Route path="/Health" exact component={Health} />
          <Route path="/Technology" exact component={Technology} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
