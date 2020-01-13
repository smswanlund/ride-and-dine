import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";

class Detail extends Component {
 
 componentDidMount() {
  }

  render() {
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
                      <input type="text" id="user/email" className="form-control" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="password" className="col-sm-2">Password</label>
                    <div className="col-sm-9">
                      <input type="password" id="password" className="form-control" />
                    </div>
                </div>
                <button className="btn btn-primary">Login</button>
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

export default Detail;
