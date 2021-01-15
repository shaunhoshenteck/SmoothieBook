import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import SmoothieList from "./components/smoothieList";
import SmoothieCard from "./components/smoothieCard";
import CreateRecipe from "./components/createRecipe";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/createRecipe" exact component={CreateRecipe} />
          <Route path="/smoothieList" exact component={SmoothieList} />
          <Route path="/smoothieCard" exact component={SmoothieCard} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
