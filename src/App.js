import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from "./Detail";
import Login from "./Login";


function App() {
  return (
    <div className="app">
      <Router>
       <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
