import React, { useState, useRef } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated
} from "react-spring";
import { Global, Container, Item } from "./styles";
import data from "./data";

function App() {
  const [open, set] = useState(false);
  const [selected, setselected] = useState(null);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: { size: open ? "100%" : "20%", background: open ? "white" : "hotpink" }
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ]);

  if (selected) {
    console.log({ ...rest, width: size, height: size });

    return [
      <Global />,
      <animated.div
        style={{ ...rest, width: size, height: size }}
        onClick={() => {
          setselected(null);
          set(open => !open);
        }}
      >
        {JSON.stringify(selected.name)}
      </animated.div>
    ];
  }

  return (
    <>
      <Global />

      <Container
        style={{ width: size, height: size }}
        onClick={() => set(open => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item
            key={key}
            onClick={() => setselected(item)}
            style={{ ...props, background: item.css }}
          />
        ))}
      </Container>
    </>
  );
}

export default App;
