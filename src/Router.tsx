import { MotionValue } from "framer-motion";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gesture from "./routes/Gesture";
import MotionValues from "./routes/MotionValues";
import Variants from "./routes/Variants";
import Home from "./routes/Home";
import SVG from "./routes/SVG";
import AP from "./routes/AP";
import Slider from "./routes/Slider";
import LayoutId from "./routes/LayoutId";
import Result from "./routes/Result";
import ResultB from "./routes/ResultB";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/resultb">
          <ResultB />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/LayoutId">
          <LayoutId />
        </Route>
        <Route path="/Slider">
          <Slider />
        </Route>
        <Route path="/AP">
          <AP />
        </Route>
        <Route path="/SVG">
          <SVG />
        </Route>
        <Route path="/Gesture">
          <Gesture />
        </Route>
        <Route path="/Variants">
          <Variants />
        </Route>
        <Route path="/MotionValues">
          <MotionValues />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
