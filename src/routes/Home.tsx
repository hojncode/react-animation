import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 19, 152);
`;

const Box = styled(motion.button)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: auto;
`;

function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <Wrapper>
      <Box>
        <Link to="/ResultB">ResultB</Link>
      </Box>
      <Box>
        <Link to="/Result">Result</Link>
      </Box>
      <Box>
        <Link to="/LayoutId">LayoutId</Link>
      </Box>
      <Box>
        <Link to="/Slider">Slider</Link>
      </Box>
      <Box>
        <Link to="/Slider">Slider</Link>
      </Box>
      <Box>
        <Link to="/AP">AP</Link>
      </Box>
      <Box>
        <Link to="/SVG">SVG</Link>
      </Box>
      <Box>
        <Link to="/Gesture">Gesture</Link>
      </Box>
      <Box>
        <Link to="/Variants">Variants</Link>
      </Box>
      <Box>
        <Link to="/MotionValues">MotionValues</Link>
      </Box>
    </Wrapper>
  );
}

export default Home;
