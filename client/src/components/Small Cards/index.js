import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";


export const SmallCard = (stuff) => {
  

  return (
   
   <div className="card">
          <div className="card-header">{stuff.name}</div>
          <ul>
          <li className="list-group-item"><img src={stuff.img} alt={stuff.name+" picture from yelp"} /></li>
      </ul>
      <div className="card-bottom"></div>
      </div>
      
  );
};

export default SmallCard;
