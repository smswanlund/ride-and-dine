import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import createAccount from "./pages/createAccount";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Dashboard" component={Dashboard} />
          
          <Route exact path="/creatAccount" component={createAccount} />
          
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
