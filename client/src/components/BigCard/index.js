import React, {useState} from "react";
import "./style.css";
import Axios from "axios";
import { useSpring, animated } from "react-spring";
import StarRating from "../StarRating";
// Calculate the tilt based on the cursor position on screen rather than the card
  
  // Apply values to transform property
  const transformCard = (x, y, scale) =>
    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;
  
  // Functions that interpolate the values for the flipping animation
  const inverseOpacity = o => 1 - o;
  const inverseTransform = t => `${t} rotateY(180deg)`;
  
const pass ="cYmchs-D7ks1z6zf7ZmYjUaQA9520b_efKJEruSleDKTTrcIbFohp9JLOHOr186XIPlnC8Sj9dOZRY_QsNyLU0_FgLdsmQXsINQWEBHQdcoLjRc-qfDUJhEhRfYPXnYx"
let reviews = [];
export const BigCard = (stuff) => {
  Axios.get(`${'http://ride-and-dine-cors.herokuapp.com/'}https://api.yelp.com/v3/businesses/`+stuff.id+`/reviews`, {headers: {
    Authorization: `Bearer ${pass}`
}}).then((res)=>{reviews=res.data.reviews;
console.log(reviews)})
  // Hold state for selection and rating
  const [selected, setSelected] = useState(0);
  const [setRating] = useState(stuff.rating);

  // Card tilt
  const [props] = useSpring(() => ({
    state: [0, 0, 1]
  }));

  // Flipping
  const { opacity, zIndex, transform } = useSpring({
    config: {
      friction: 22,
      tension: 500
    },
    opacity: selected===1 ? 1 : 0,
    zIndex: selected===1 ? 1000 : -50,
    transform: `rotateY(${selected ? 180 : 0}deg)`
  });
  return (
   
      <animated.div
      className="RatingsCard"
      
      
     
      style={{ transform: !selected && props.state.interpolate(transformCard) }}
    >
      {/* Front */}
      <animated.div
        className="card big-card"
        style={{
          opacity: opacity.interpolate(inverseOpacity),
          transform
        }}
      >
          <div className="big-header card-header">{stuff.name} <button className="btn btn-outline-danger close-card"  onClick={stuff.toggle}>X</button></div>
          <ul>
          <li className="list-group-item"><img className="big-picture" src={stuff.img} alt={stuff.name+" picture from yelp"} /></li>
      </ul>
      <div className="big-bottom"><div className="reviews"><a href="javacript:" className="btn btn-outline-danger card_button" onClick={()=>setSelected(1)}>Read the Reviews</a></div><div className="delivery"><a className="btn btn-outline-warning card_button">Get it Delivered</a></div><div className="rides"><a className="btn btn-outline-success card_button">Get a Ride</a></div></div>

      </animated.div>
      {/* Back */}
      <animated.div
        className="card big-card big-card-back"
        onClick={()=>setSelected(0)}
        style={{
          opacity,
          zIndex,
          transform: transform.interpolate(inverseTransform)
        }}
      >
        {/* Show rating only if the card is selected */}
        {selected===1 && (
            <div>
          <div className="big-header card-header">{stuff.name}<button className="btn btn-outline-danger close-card"  onClick={stuff.toggle}>X</button></div>
          <ul>
          <li className="list-group-item review-container">{reviews.map((review)=>(<div className="aReview">
              <StarRating rating={review.rating} setRating={setRating} />
          <div>{review.text.indexOf("...")!==-1?(<div>{review.text.substring(0,review.text.length-3)}<a href={review.url}>...</a></div>) :review.text}</div></div>)
          )}</li>
      </ul>
      <div className="big-bottom"><div className="reviews"><a className="btn btn-outline-danger card_button" onClick={()=>setSelected(0)}>Back to Info</a></div><div className="delivery"><a className="btn btn-outline-warning card_button">Get it Delivered</a></div><div className="rides"><a className="btn btn-outline-success card_button">Get a Ride</a></div></div>
      </div>)}
      </animated.div>
    </animated.div>
  );
};

export default BigCard;
