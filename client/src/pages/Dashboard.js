import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { RadiusDropDown } from "../components/RadiusDropDown/index.js"; ///maybe take this out
import SmallCard from "../components/Small Cards";
import "../components/RadiusDropDown/style.css"
import axios from "axios";
import {Grid} from 'mauerwerk';
import BigCard from "../components/BigCard";

const pass ="cYmchs-D7ks1z6zf7ZmYjUaQA9520b_efKJEruSleDKTTrcIbFohp9JLOHOr186XIPlnC8Sj9dOZRY_QsNyLU0_FgLdsmQXsINQWEBHQdcoLjRc-qfDUJhEhRfYPXnYx"
let lat='';
let lng='';

class Dashboard extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      distance: "",
      showMenu: false,
      value: 1000,
      location:false,
      open:false
    };
  
   this.handleChange=this.handleChange.bind(this);
    this.searchRes=this.searchRes.bind(this); 
    
    }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
      
    }
    else{
      
    }
  
  }
  displayLocationInfo=position=>{
    lng = position.coords.longitude;
    lat = position.coords.latitude;
    this.setState({
      location:true
    })
    this.searchRes(8047)
  }
  searchRes(radius) {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
      headers: {
        Authorization: `Bearer ${pass}`
    },
      params: {
      latitude: lat,
      longitude: lng,
      rating: 5,
      categories: 'food, ALL',
      limit: 8,
      radius: radius
    }
    })
    .then((res) => {
      this.setState({
        isLoaded: true,
        data: res.data.businesses
      },()=>console.log(this.state))
    })

  }
  
  handleChange = (newValue) => {
    this.searchRes(newValue)
    this.setState({ value: newValue } )
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  render() {
    const { error, isLoaded, data, location } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }else if(!location){
      return <div>You must enable location</div>
    }  else if(!isLoaded){
      return <div>Loading</div> 
    } else{
      
    return (


      <Container fluid>
        
        <RadiusDropDown  value={this.state.value} handleChange={this.handleChange} />

        <Row>
        {/* {data.map(place=>
          <Col size="md-3">
              <SmallCard name={place.name} img={place.image_url} />
          </Col>
          )} */}
        </Row>
        <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={400}
        // Number of columns
        columns={4}>
        {(data, maximized, toggle) => (
         
          <div
            className="cell"
            style={{ backgroundImage: data.css }}
            onClick={toggle}>
            {maximized && (
              <BigCard name={data.name} img={data.image_url} />
            )}
            {!maximized && <SmallCard name={data.name} img={data.image_url} />}
          </div>
        )}
      </Grid>
      </Container>
      
    );
  }
  }
}
export default Dashboard;