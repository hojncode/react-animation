import { MotionValue } from "framer-motion";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gesture from "./routes/Gesture";
import MotionValues from "./routes/MotionValues";
import Variants from "./routes/Variants";
import Home from "./routes/Home";
import SVG from "./routes/SVG";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
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
