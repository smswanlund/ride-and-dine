import React from "react";
import "./style.css";

export function SmallCard(stuff){
    
    return (

        <div className="card" id={stuff.id} >
            <div className="card-header">{stuff.name}</div>
            <ul>
                <li className="list-group-item"><img src={stuff.img} alt={stuff.name+" picture from yelp"} /></li>
            </ul>

            <div className="card-body card-bottom"></div>
        </div>
    )
}

export default SmallCard;