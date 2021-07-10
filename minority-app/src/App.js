import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
import IncubatorHome from "./components/incubator/incubatorHome";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/incubator" exact>
        <IncubatorHome />
      </Route>
      <Route path="/learn" exact>
        <div>Learn</div>
      </Route>
    </Switch>
  );
}

export default App;
