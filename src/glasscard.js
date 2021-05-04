import React from "react";
import profile from "./images/prabin.png";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Container = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(8px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  line-heright: 1.5;
  letter-spacing: 1.5;
  font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
  line-heright: 1.5;
  letter-spacing: 1.15;
  font-family: "Gilroy";
  font-size: 20px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const GlassCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <StyledImg src={profile} />
      <StyledH1>Prabin Karki</StyledH1>
      <StyledH3>
        Software Engineer, Designer <br /> and Full Stack Developer
      </StyledH3>
    </Container>
  );
};

export default GlassCard;
