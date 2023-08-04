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
        <Route exact path="/" component={Home} />
        <Route exact path="/util/resultb" component={ResultB} />
        <Route exact path="/resultb" component={ResultB} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/LayoutId" component={LayoutId} />
        <Route exact path="/Slider" component={Slider} />
        <Route exact path="/AP" component={AP} />
        <Route exact path="/SVG" component={SVG} />
        <Route exact path="/Gesture" component={Gesture} />
        <Route exact path="/Variants" component={Variants} />
        <Route exact path="/MotionValues" component={MotionValues} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
