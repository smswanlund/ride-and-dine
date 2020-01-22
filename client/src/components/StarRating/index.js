import React from "react";
import { useTrail, animated } from "react-spring";
import Star from "../Star";

export const StarRating = ({ rating }) => {
  // Make <Star /> component aware of animations
  const AnimatedStar = animated(Star);

  // Set stars to animate one after another
  const animatedStars = useTrail(5, {
    config: {
      friction: 22,
      tension: 500
    },
    from: { opacity: 0, transform: "scale(0.8)" },
    opacity: 1,
    transform: "scale(1)"
  });

  return (
    <div className="StarRating">
      {/* Display a set of stars */}
      {animatedStars.map((props, index) => (
        <AnimatedStar
          active={index + 1 <= rating}
          key={index}
          style={{ ...props }}
        />
      ))}
    </div>
  );
};

export default StarRating;
