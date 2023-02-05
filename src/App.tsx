import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box: Variants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

// 니꼬쌤꺼에서 버그 있어서 댓글에 있던 아래 주소 참고함
// https://github.com/jijiseong/react_animation/blob/8e624ce9f5680b2cfc03bb92c014fc9e2fe929a4/src/components/Slider.tsx
function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState({ value: false });

  const nextPlease = () => {
    setBack({ value: false });
  };
  const prevPlease = () => {
    setBack({ value: true });
  };
  useEffect(() => {
    if (back.value) {
      setVisible((cur) => (cur !== 1 ? cur - 1 : cur));
    } else {
      setVisible((cur) => (cur !== 10 ? cur + 1 : cur));
    }
  }, [back]);
  return (
    <Wrapper>
      <AnimatePresence custom={back.value} mode="wait">
        <Box
          custom={back.value}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}
export default App;
