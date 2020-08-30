import "./App.css";
import "./About.css";
import "./Contact.css";
import NavbarR from "./NavbarR";
import CourselC from "./CourselC";
import Hakkimizda from "./Hakkimizda";
import React from "react";
import { BrowserRouter as MainRouter, Switch, Route } from "react-router-dom";
import Contact from "./Contact";

const App = () => {
  return (
    <React.Fragment>
      <MainRouter>
        <Switch>
          <Route exact path="/">
          <NavbarR></NavbarR>
          ANASAYFADIR
          </Route>
          <Route path="/hakkimizda">
          <Hakkimizda></Hakkimizda>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <CourselC></CourselC>
        </Switch>
      </MainRouter>
    </React.Fragment>
  );
};

export default App;
