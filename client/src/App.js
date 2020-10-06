import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
