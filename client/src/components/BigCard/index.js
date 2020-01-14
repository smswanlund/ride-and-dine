import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";


export const BigCard = (stuff) => {
  

  return (
   
   <div className="card big-card">
          <div className="card-header big-header">{stuff.name}</div>
          <ul>
          <li className="list-group-item"><img className="big-picture" src={stuff.img} alt={stuff.name+" picture from yelp"} /></li>
      </ul>
      <div className="big-bottom"></div>
      </div>
      
  );
};

export default BigCard;
