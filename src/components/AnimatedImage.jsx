import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedImage = ({ src, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    config: config.wobbly,
  });




  return (
    <animated.img
      ref={ref}
      src={src}
      alt=""
      className={`w-80 mx-4 my-4 rounded-md hover:shadow-2xl hover:shadow-gray-700 hover:cursor-pointer`}
      style={props}
    />
  );
};

export default AnimatedImage;
