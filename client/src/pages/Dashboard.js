import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Dashboard extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    age: 0,
    liked: [],
    disliked: []
  };

  componentDidMount() {
    this.loadUser();
    this.loadUsers();
  }

  loadUser = (id) => {
    API.getUser(id)
      .then(res =>
        this.setState({ user: res.data})
      )
      .catch(err => console.log(err));
  };

  loadUsers = () => (
    API.getUsers()
  )

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            Welcome to The site: {this.state.userName}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
