import React from "react";
import "./style.css";

export class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.showMenu=this.showMenu.bind(this);
     this.closeMenu = this.closeMenu.bind(this);
     this.handleChange=this.handleChange.bind(this);
     
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




  handleChange(e) {
    const cat = e.target.value;
    this.props.onChange(cat);
  }
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names"
          onChange={this.handleChange}>
          <option value="Thai">
            Thai
          </option>

          <option value="Vegan">
            Vegan
          </option>

          <option value="BBQ">
            BBQ
          </option>
        </select>
      </div>
    );
  }
}


export default CategoryButton;