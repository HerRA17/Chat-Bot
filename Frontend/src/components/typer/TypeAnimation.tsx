import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
return (
  <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Chat with your Own AI',
    1000,
    'Built with your Own AI',
    2000,
    'Your Own Customized AI',
    1500,
  ]}
  speed={50}
  style={{ fontSize: '80px', color: "white", display: "inline-block", textShadow: "1px 1px 20px #000" }}
  repeat={Infinity}
/>
);
};

export default TypingAnimation;