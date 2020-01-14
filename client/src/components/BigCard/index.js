import React from "react";
import "./style.css";


export const BigCard = (stuff) => {
  

  return (
   
   <div className="card big-card">
          <div className="big-header card-header">{stuff.name} <button className="btn btn-outline-danger close-card"  onClick={stuff.toggle}>X</button></div>
          <ul>
          <li className="list-group-item"><img className="big-picture" src={stuff.img} alt={stuff.name+" picture from yelp"} /></li>
      </ul>
      <div className="big-bottom"><div className="reviews">Read the Reviews</div><div className="delivery">Get it Delivered</div><div className="rides">Get a Ride</div></div>
      </div>
      
  );
};

export default BigCard;
