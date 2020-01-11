import React from "react";
import "./style.css";
export function SmallCard(props){
    return (
        <div className="card" id={props.id} >
            <div className="card-header">{props.name}</div>
            <ul>
                <li className="list-group-item"><img src={props.img}  /></li>
            </ul>

            <div className="card-body"></div>
        </div>
    )
}

export default SmallCard;