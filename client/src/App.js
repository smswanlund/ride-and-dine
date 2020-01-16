import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Dashboard";
import Login from "./pages/Login";
import Create from "./pages/createAccount";
import NoMatch from "./pages/404";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  
  return (
    <Provider store={store}>
    <Router>
      <div>
      
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createaccount" component={Create} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );

}

export default App;