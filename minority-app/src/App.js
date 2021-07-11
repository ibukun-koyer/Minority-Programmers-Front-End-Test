import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
import IncubatorHome from "./components/incubator/incubatorHome";
import { useDataContext } from "./context/data";
import { useEffect, useState } from "react";
import IncubatorBranchLanding from "./components/incubator/incubatorBranch/incubatorBranchLanding";
import NavBar from "./components/mainHelper/navBar/navBar";
import LearnLanding from "./components/learn/learnLanding/learnLanding";
import { useCoursesContext } from "./context/courses";
import "./App.css";
import WeekActivities from "./components/learn/learnModules/weekActivities/weekActivities";
import RouteToNestedLearn from "./components/learn/helperFiles/errorCheckingAndRouting/routeToNestedLearn";

function App() {
  const dataStorage = useDataContext();
  const coursesStorage = useCoursesContext();
  useEffect(() => {
    dataStorage.initializeDataStorage();
    coursesStorage.initializeCourseData();
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
      <Route path="/learn">
        <NavBar />
        <Switch>
          <Route path="/learn" exact>
            <LearnLanding />
          </Route>
          <Route path="/learn/:id">
            <RouteToNestedLearn coursesStorage={coursesStorage} />
          </Route>
        </Switch>
      </Route>
    </Switch>
  );
}

export default App;
