import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Dashboard";
import Login from "./pages/Login";
import Create from "./pages/createAccount";
import NoMatch from "./pages/404";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

if (sessionStorage.jwtToken) {
  // Set auth token header auth
  const token = sessionStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    sessionStorage.clear();
    // Redirect to login
    window.location.href = "./login";
  }
}
function App() {
  
  return (
    <Provider store={store}>
    <Router>
      <div>
      
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
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