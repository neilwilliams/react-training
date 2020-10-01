import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Counter, Home, Beer } from "./routes";

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
            <a href="/beer">Beer</a>
          </li>
          <li>
            <a href="/counter">Counter</a>
          </li>
        </ul>

        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/beer">
            <Beer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
