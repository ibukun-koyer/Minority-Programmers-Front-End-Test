import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/incubator" exact>
        <div>Incubator</div>
      </Route>
      <Route path="/learn" exact>
        <div>Learn</div>
      </Route>
    </Switch>
  );
}

export default App;
