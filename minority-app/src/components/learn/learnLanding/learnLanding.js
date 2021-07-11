import classes from "./learnLanding.module.css";
import GradientBkg from "../helperFiles/gradientBkg";
import { Fragment } from "react";
import { useCoursesContext } from "../../../context/courses";
import LearnLandingComponent from "./learnLandingComponent/learnLandingComponent";

function LearnLanding() {
  const coursesStorage = useCoursesContext();
  return (
    <Fragment>
      {/* background image */}
      <GradientBkg className={classes.myGradient}>
        <div className={classes.worldImageWrap}>
          <img
            src={process.env.PUBLIC_URL + "/worldImage.png"}
            alt="world"
            className={classes.worldImage}
          />
        </div>
        <div className={classes.wrapBkgText}>
          <h1>Learn high in demand IT Skills &amp; Get Crypto</h1>
          <div>
            powered by <span>koinstreet</span>
          </div>
        </div>
      </GradientBkg>
      {/* body */}
      <div className={classes.body}>
        {/* searchBar */}
        <div className={classes.centerItems}>
          <div className={classes.wrapInput}>
            <input
              type="text"
              placeholder="What event are you looking for?"
              className={classes.searchBar}
            />{" "}
            <img
              src={process.env.PUBLIC_URL + "/searchIcon.png"}
              alt="searchIcon"
              className={classes.searchIcon}
            />
          </div>
          <select className={classes.select}>
            <option>Filter search</option>
          </select>
        </div>
        {/* card components */}
        {coursesStorage.isEmpty() ? null : (
          <LearnLandingComponent components={coursesStorage.getCourses()} />
        )}
      </div>
    </Fragment>
  );
}
export default LearnLanding;
