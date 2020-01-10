import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SmallCard from "../components/Small Cards";
import axios from "axios";
const pass ="cYmchs-D7ks1z6zf7ZmYjUaQA9520b_efKJEruSleDKTTrcIbFohp9JLOHOr186XIPlnC8Sj9dOZRY_QsNyLU0_FgLdsmQXsINQWEBHQdcoLjRc-qfDUJhEhRfYPXnYx"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
    }
  componentDidMount() {
    this.searchRes();

  }
  searchRes() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Richmond`, {
      headers: {
        Authorization: `Bearer ${pass}`
    },
      params: {
      categories: 'pubs',
      limit: 8
    }
    })
    .then((res) => {
      this.setState({
        isLoaded: true,
        data: res.data.businesses
      },()=>console.log(this.state))

      // console.log(res.data)
      // console.log(this.state)
    })

  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }   else if (!isLoaded) {
      return <div>Loading...</div>;
    }  else { 

    return (
      <Container fluid>
        <Row>
        {data.map(place=>
          <Col size="md-3">
            {console.log(data)}

              <SmallCard name={place.name} img={place.image_url} />

          </Col>
          )}
        </Row>
      </Container>
    );
  }
  }
}
export default Dashboard;