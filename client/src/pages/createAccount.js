import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      username: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    console.log('I see change')
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("trying log")
    const newUser = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <Container fluid className="align-center">
        <Row>
        <Col size="lg-3" />
        <Col size="lg-6" offset="3">
            <div className="card" >
              <div className="card-body text-center">
                <h2>Create Account</h2>
                <div className="form-group row" >
                    <label for="username" className="col-sm-2">Username</label>
                    <div className="col-sm-10">
                    <input
                      onChange={this.onChange}
                      value={this.state.username}
                      error={errors.username}
                      id="username"
                      type="text"
                      className={classnames("", {
                        invalid: errors.username
                      })}
                    />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="email" className="col-sm-2">Email</label>
                    <div className="col-sm-10">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email
                      })}
                    />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="name" className="col-sm-2">Name</label>
                    <div className="col-sm-10">
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                    />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="password" className="col-sm-2">Password</label>
                    <div className="col-sm-10">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                    </div>
                </div>
                <button onClick={this.onSubmit} className="btn btn-primary" >Create Account</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));