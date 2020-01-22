import React from "react";
import "./style.css";


export const SmallCard = (stuff) => {
  

  return (
   
   <div className="card" onClick={stuff.toggle}>
          <div className="card-header">{stuff.name}</div>
          <ul>
          <li className="list-group-item"><img src={stuff.img||"https://via.placeholder.com/400"} alt={stuff.name+" picture from yelp"} /></li>
      </ul>
      <div className="card-bottom"></div>
      </div>
      
  );
};

export default SmallCard;
