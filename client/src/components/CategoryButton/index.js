import React from "react";
import "./style.css";

export class CategoryButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showMenu: false,
      //value: 2000
    };
  
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



  select(event) {
    console.log(event.target.getAttribute("name"))
    this.props.onClick(event.target.getAttribute("name"))
  } 
    render() {
       
 

          
        const menuClass = `dropdown-menu${this.state.showMenu ? " showOne" : ""}`;
        
        return (
          <div className="dropdown" onClick={this.showMenu}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
             
            >
              
              Category: {this.props.name.substring(0,1).toUpperCase()+this.props.name.substring(1,this.props.name.length)}
            </button>
            <div 
            className={menuClass} 
            aria-labelledby="dropdownMenuButton"
            
            >
            <a className="dropdown-item" href="#nogo" name={"all"} onClick={(e)=> this.select(e)}>
                All
              </a>

              <a className="dropdown-item" href="#nogo" name={"american"} onClick={(e)=> this.select(e)}>
                American
              </a>

              <a className="dropdown-item" href="#nogo" name={"bbq"} onClick={(e)=> this.select(e)}>
                BBQ
              </a>   

                <a className="dropdown-item" href="#nogo" name={"chinese"} onClick={(e)=> this.select(e)}>
                Chinese
              </a>

              <a className="dropdown-item" href="#nogo" name={"indpak"} onClick={(e)=> this.select(e)}>
                Indian
              </a>

              <a className="dropdown-item" href="#nogo" name={"italian"} onClick={(e)=> this.select(e)}>
                Italian
              </a>

              <a className="dropdown-item" href="#nogo" name={"mexican"} onClick={(e)=> this.select(e)}>
                Mexican
              </a>

              <a className="dropdown-item" href="#nogo" name={"thai"} onClick={(e)=> this.select(e)}>
                Thai
              </a>

              <a className="dropdown-item" href="#nogo" name={"vegan"} onClick={(e)=> this.select(e)}>
                Vegan
              </a>

              <a className="dropdown-item" href="#nogo" name={"coffee"} onClick={(e)=> this.select(e)}>
                Coffee
              </a>

            </div>
          </div>
        );
      }
}

export default CategoryButton;