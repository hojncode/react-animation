import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  margin-right: 10px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValues() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]); // useEffect(() => {
  //   rotateZ.onChange(() => console.log(rotateZ.get()));
  // }, [rotateZ]);
  // //! 박스 움직임 좌표 콘솔찍기
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(19, 214, 235), rgb(0, 38, 255))",
      "linear-gradient(135deg, rgb(235, 19, 152), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 255, 145), rgb(236, 172, 54))",
    ]
  );
  // const { scrollY, scrollYProgress } = useViewportScroll();
  // useEffect(() => {
  //   scrollY.onChange(() => {
  //     console.log(scrollY.get(), scrollYProgress.get());
  //   });
  // }, [scrollY, scrollYProgress]);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <div>
      {/* <Router /> */}
      <Wrapper style={{ background: gradient }}>
        {/* <Button onClick={() => x.set(200)}>click me</Button> */}

        <Link to="/gesture">
          <Button>Gesture</Button>
        </Link>
        <Button>Variants</Button>
        <Button>MotionValues</Button>
      </Wrapper>
    </div>
  );
}

export default MotionValues;
