import React, { Component} from "react";
import { Container } from "../components/Grid";
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
      name: "all",
      value: "8046",
      location:false,
      width: window.innerWidth || document.documentElement.clientWidth
    };
  
   this.handleChange=this.handleChange.bind(this);
   this.handleCategoryChange=this.handleCategoryChange.bind(this);
    this.searchRes=this.searchRes.bind(this); 
    
    }
  updateWidth=()=>{
    this.setState({width:window.innerWidth || document.getElementById.clientWidth})
  }
  componentDidMount() {
    window.addEventListener("resize",this.updateWidth());
    navigator.geolocation?(navigator.geolocation.getCurrentPosition(this.displayLocationInfo)):(console.log("oof1"))
    this.state.location?(this.searchRes()):(console.log("oof"));
  }
 
  displayLocationInfo=position=>{
    lng = position.coords.longitude;
    lat = position.coords.latitude;
    console.log(lat+","+lng)
    this.setState({
      location:true
    })
    this.searchRes(this.state.value, this.state.name);
  }
  searchRes(name) {
    axios.get(`${'https://ride-and-dine-cors.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
      headers: {
        Authorization: `Bearer ${pass}`
    },
      params: {
      latitude: lat,
      longitude: lng,
      rating: 5,
      categories: this.state.name,
      limit: 8,
      radius: this.state.value,
      sort_by:"rating",
      term:"food"
    }
    })
    .then((res) => {
      this.setState({
        isLoading: false,
        data: res.data.businesses,
        value: this.state.value,
        name: this.state.name
      },()=>(console.log(this.state.data)))
    })

  }
  
  handleChange = (newValue) => {
    this.setState({ value: newValue },()=>(this.searchRes(newValue)) )
    
  }

  handleCategoryChange = (newName) => {
    this.setState({ name: newName },()=>(this.searchRes()));
    
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
        {data.length>0?
        (<Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.id}
        // Can be a fixed value or an individual data accessor
        lockScroll={true}
        heights={400}
        // Number of columns
        columns={this.state.width>640 ? (this.state.width>1080 ? 4 : 2) : 1}>
          
        {(data, maximized, toggle) => (
         
          <div className="cell">
            {maximized && (
              <BigCard name={data.name} img={data.image_url} toggle={toggle} id={data.id} rating={data.rating} phone={[data.display_phone,data.phone]} address={data.location.display_address} />
            )}
            {!maximized && <SmallCard name={data.name} img={data.image_url} toggle={toggle} />}
          </div>
        )}
      </Grid>) : (<div className="notFound">No results found</div>)}
      </Container>
      
    );
  }
  }
}
export default Dashboard;