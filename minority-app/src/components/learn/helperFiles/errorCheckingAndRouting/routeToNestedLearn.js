import { useCallback, useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router";
import ErrorHandler from "../../../mainHelper/errorHandler/errorHandler";
import WeekActivities from "../../learnModules/weekActivities/weekActivities";
import WeekFullInfo from "../../learnModules/weekFullInfo/weekFullInfo";
import SpecificWeek from "../../learnModules/specificWeek/specificWeek";
import $ from "jquery";
function RouteToNestedLearn({ coursesStorage }) {
  const { id } = useParams();
  const [course, setCourse] = useState(undefined);
  useEffect(() => {
    setCourse(coursesStorage.getCourseById(id));
  }, []);
  const [hideWeekActivities, setHideWeekActivities] = useState(false);

  const [clickedNav, setClickedNav] = useState(false);

  const handleResize = useCallback(() => {
    if ($(window).width() <= 1090) {
      if (!hideWeekActivities) setHideWeekActivities((prev) => !prev);
    } else {
      if (hideWeekActivities) setHideWeekActivities((prev) => !prev);
    }
  }, [hideWeekActivities]);
  useEffect(() => {
    $(window).on("resize", handleResize);
    return () => $(window).off("resize", handleResize);
  }, [handleResize]);
  useEffect(() => {
    handleResize();
  }, []);
  return (
    <ErrorHandler
      pageData={course}
      errorMessage="Oops, course was not found"
      reason="This happened because the browser was refreshed leading to a new randomly generated data being generated."
    >
      <div className="body-of-branched-learn">
        {hideWeekActivities && !clickedNav ? null : (
          <WeekActivities course={course} navBar={hideWeekActivities} />
        )}

        <Switch>
          <Route path="/learn/:id" exact>
            <WeekFullInfo
              course={course}
              hideWeekActivities={hideWeekActivities}
              setClickedNav={setClickedNav}
              clickedNav={clickedNav}
            />
          </Route>
          <Route path="/learn/:id/week:weekid" exact>
            <SpecificWeek
              course={course}
              hideWeekActivities={hideWeekActivities}
              setClickedNav={setClickedNav}
              clickedNav={clickedNav}
            ></SpecificWeek>
          </Route>
        </Switch>
      </div>
    </ErrorHandler>
  );
}
export default RouteToNestedLearn;
