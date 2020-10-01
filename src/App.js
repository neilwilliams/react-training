import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { About, Home, Contact } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="display-4 mt-4 mb-4">React app - with react router</h1>
        <hr />
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>

        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
