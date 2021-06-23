import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <h1>Welcome.</h1>
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;