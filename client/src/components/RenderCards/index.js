import React from 'react';
import { Col, Row, Container } from "../Grid";
import SmallCard from '../Small Cards';
export function RenderCards(props){

    return(
        props.data.map(place=>(
        <Col size="lg-3">
            <SmallCard name={place.name} img={place.image_url} id={place.id}/>
        </Col>)
        ))
}



export default RenderCards;