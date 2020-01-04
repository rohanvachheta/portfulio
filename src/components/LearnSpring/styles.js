import { animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 15px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

export { Global, Container, Item };
