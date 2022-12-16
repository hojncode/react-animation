import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Router from "./Router";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgb(243, 239, 239);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    scale.onChange(() => console.log(scale.get()));
  }, [scale]);
  // //! 박스 움직임 좌표 콘솔찍기
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);

  return (
    <div>
      {/* <Router /> */}
      <Wrapper>
        {/* <button onClick={() => x.set(200)}>click me</button> */}
        <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </div>
  );
}

export default App;
