import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
import IncubatorHome from "./components/incubator/incubatorHome";
import { useDataContext } from "./context/data";
import { useEffect } from "react";
import IncubatorBranchLanding from "./components/incubator/incubatorBranch/incubatorBranchLanding";
function App() {
  const dataStorage = useDataContext();
  useEffect(() => {
    dataStorage.initializeDataStorage();
  }, []);
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/incubator" exact>
        <IncubatorHome />
      </Route>
      <Route path="/startup-info/:id" exact>
        <IncubatorBranchLanding />
      </Route>
      <Route path="/learn" exact>
        <div>Learn</div>
      </Route>
    </Switch>
  );
}

export default App;
