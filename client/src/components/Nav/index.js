import React from "react";
import {NavLink} from 'react-router-dom';
import "./style.css";
import { logoutUser, registerUser } from "../../actions/authActions";
import account from '../../pages/createAccount';
import PropTypes from "prop-types";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
      <img class="logo" src="RNDlogo.PNG" alt="RND logo"></img>
      <a className="navbar-brand" href="/">
        Ride and Dine
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          {!sessionStorage.jwtToken?(
            <div className="navbar-nav">
          <NavLink exact to="/" className="nav-link" activeClassName="hidden">Home</NavLink>
          <NavLink exact to="/createaccount" className="nav-link" activeClassName="hidden">Create Account</NavLink>
          <NavLink exact to="/login" className="nav-link" activeClassName="hidden">Login</NavLink>
          </div>
           ):
          ( 
             <div className="navbar-nav">
            <NavLink exact to="/" className="nav-link" activeClassName="hidden">Home</NavLink>
          <NavLink exact to="#" className="nav-link" onClick={logoutUser()}>Logout (Hi {sessionStorage.name})</NavLink>
            </div>
          )} 
        
      </div>
    </nav>
  );
}

export default Nav;
