import { BrowserRouter, Route, Switch } from "react-router-dom";
import Variants from "./routes/Variants";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/variants">
          <Variants />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
