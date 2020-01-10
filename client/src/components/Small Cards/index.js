import React from "react";
import "./style.css";
export function SmallCard(props){
    return (
        <div className="card">
            <div className="card-header">{props.name}</div>
            <div className="card-body"><img src={props.img}  height={"200px"} /></div>
        </div>
    )
}

export default SmallCard;