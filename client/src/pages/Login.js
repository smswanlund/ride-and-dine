import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { loginUser } from "../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user_email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/main");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/main");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      user_email: this.state.user_email,
      password: this.state.password
    };
    console.log(userData  )
    this.props.loginUser(userData);
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
                <h2>Login</h2>
                <div className="form-group row" >
                    <label for="user/email" className="col-sm-2">Username/<br />Email</label>
                    <div className="col-sm-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="user_email"
                        type="text"
                        className={classnames("", {
                          invalid: errors.email || errors.emailnotfound
                        })}
                      />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="password" className="col-sm-2">Password</label>
                    <div className="col-sm-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                        })}
                      />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.onSubmit}>Login</button>
                <hr />
                Don't have an account? <a href="createaccount">Create One Here</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
