import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { RadiusDropDown } from "../components/RadiusDropDown/index.js"; ///maybe take this out
import SmallCard from "../components/Small Cards";
import "../components/RadiusDropDown/style.css"
import { CategoryButton } from "../components/CategoryButton/index.js"
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
      isLoading: true,
      data: [],
<<<<<<< HEAD
      distance: "",
      showMenu: false,
      value: 1000,
      location:false,
      open:false
=======
      //distance: "",
      //showMenu: false,
      name: "all",
      value: 10000,
      location:false
>>>>>>> bb06f8ecf78ed017c5aeb9eb790e89de211a8705
    };
  
   this.handleChange=this.handleChange.bind(this);
   this.handleCategoryChange=this.handleCategoryChange.bind(this);
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
    this.searchRes(this.state.value, this.state.name);
  }
  searchRes(name) {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
      headers: {
        Authorization: `Bearer ${pass}`
    },
      params: {
      latitude: lat,
      longitude: lng,
      rating: 5,
      categories: name,
      limit: 8,
      radius: this.state.value
    }
    })
    .then((res) => {
      this.setState({
        isLoading: false,
        data: res.data.businesses,
        value: this.state.value,
        name: this.state.name
      },()=>console.log(this.state))
    })

  }
  
  handleChange = (newValue) => {
    this.searchRes(newValue)
    this.setState({ value: newValue } )
  }

  handleCategoryChange = (newName) => {
    this.searchRes((newName),
    this.setState({ name: newName } ))
    
  } 

  render() {
    const { error, isLoading, data, location } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }else if(!location){
      return <div>You must enable location</div>
    }  else if(isLoading){
      return <div>Loading</div> 
    } else{
      
    return (


      <Container fluid>
        
        <RadiusDropDown  value={this.state.value} handleChange={this.handleChange} />
        <CategoryButton  name={this.state.name} onClick={this.handleCategoryChange} />
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