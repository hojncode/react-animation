import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Gesture from "./routes/Gesture";
import Variants from "./routes/Variants";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
        <Route path="/variants">
          <Variants />
        </Route>
        <Route path="/gesture">
          <Gesture />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
