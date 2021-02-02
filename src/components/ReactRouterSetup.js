import React from "react";
import Form from "../pages/Form";
import Navbar from "./Navbar";
import Error from "../pages/Error";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import ClothesShop from "../pages/ClothesShop";
import About from "../pages/About";
import PizzaShop from "../pages/PizzaShop";
import PhotoShop from "../pages/PhotoShop";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route 
        path="/interested">
          <Form />
        </Route>
        <Route path="/starsweb">
          <ClothesShop />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pizzaweb">
          <PizzaShop />
        </Route>
        <Route path="/photoweb">
          <PhotoShop />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
