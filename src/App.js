import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from "react-router";
import { Link } from "react-router-dom";

function Home() {
  return <h1>Welcome to the home page</h1>;
}

function About() {
  return <h1>You are on the about page</h1>;
}

function Contact() {
  return <h1>Please feel free to email us</h1>;
}

function NoMatch() {
  return <h1>404 Not Found</h1>;
}

function App() {
  return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route>
            <NoMatch />
          </Route>

      </div>
  );
}

export default App;
