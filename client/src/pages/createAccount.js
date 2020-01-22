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
                <h2>Create Account</h2>
                <div className="form-group row" >
                    <label for="username" className="col-sm-2">Username</label>
                    <div className="col-sm-10">
                      <input type="text" id="username" className="form-control" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="email" className="col-sm-2">Email</label>
                    <div className="col-sm-10">
                      <input type="text" id="email" className="form-control" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="name" className="col-sm-2">Name</label>
                    <div className="col-sm-10">
                      <input type="text" id="name" className="form-control" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label for="password" className="col-sm-2">Password</label>
                    <div className="col-sm-10">
                      <input type="password" id="password" className="form-control" />
                    </div>
                </div>
                <button className="btn btn-primary">Create Account</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
