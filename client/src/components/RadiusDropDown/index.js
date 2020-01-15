import React from "react";
import "./style.css";

 


 export class RadiusDropDown extends React.Component {
    constructor(props) {
    super();
    this.state = {
      showMenu: false,
      
    };
    console.log(super())
    this.showMenu=this.showMenu.bind(this);
     this.closeMenu = this.closeMenu.bind(this);
     this.select = this.select.bind(this);
     
  }
  
 
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
 
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }


  handleChange(event) {
    this.props.onChange(event.target.value);
    this.setState({
      showMenu: !this.state.showMenu,
    
      
    });
  
    
  }

  select(event) {
    console.log(event.target.getAttribute("value"))
    this.props.handleChange(event.target.getAttribute("value"))
  }  
      



    render() {
       
 
      
      const menuClass = `dropdown-menu${this.state.showMenu ? " show" : ""}`;
      
      return (
        <div className="dropdown" onClick={this.showMenu}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
           
          >
            Radius: {this.props.value==8046 ? "5 mi" : (this.props.value==1609 ? "1 mi" : "10 mi")}
          </button>
          <div 
          className={menuClass} 
          aria-labelledby="dropdownMenuButton"
          
          >
            <a className="dropdown-item" href="#nogo" value={1609} onClick={(e)=> this.select(e)}>
              1 mile
            </a>
            <a className="dropdown-item" href="#nogo" value={8046} onClick={(e)=> this.select(e)}>
              5 miles
            </a>
            <a className="dropdown-item" href="#nogo" value={16093} onClick={(e)=> this.select(e)}>
              10 miles
            </a>
          </div>
        </div>
      );
    }
  }
  




