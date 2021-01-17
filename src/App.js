import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import SmoothieList from "./components/smoothieList";
import SmoothieCard from "./components/smoothieCard";
import CreateRecipe from "./components/createRecipe";
import NavBar from "./components/navbar";
import SmoothieDetails from "./components/smoothieDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/createRecipe" exact component={CreateRecipe} />
          <Route path="/smoothieDetail" exact component={SmoothieDetails} />
          <Route path="/smoothieList" exact component={SmoothieList} />
          <Route path="/smoothieCard" exact component={SmoothieCard} />
          <Route path="/" exact component={Home} />
        </Switch>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
