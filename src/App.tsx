import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  display: grid;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  const x = useMotionValue(0);
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  useMotionValueEvent(potato, "change", (I) => {
    console.log(I);
  });
  return (
    <Wrapper>
      <Box style={{ x, scale: potato }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;
