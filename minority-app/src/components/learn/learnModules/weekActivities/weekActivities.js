import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import classes from "./weekActivities.module.css";

function WeekActivities({ course, navBar }) {
  const { courseName, modules } = course;
  const history = useHistory();
  return (
    <Fragment>
      {/* {courseData?} */}
      <div className={`${classes.body} ${navBar ? classes.navBar : ""}`}>
        {/* courses title */}
        <div className={classes.coursesHeader}>
          Courses
          <i
            className={`fa fa-angle-right ${classes.backIcon}`}
            aria-hidden="true"
            onClick={() => {
              history.replace("/learn");
            }}
          ></i>
        </div>
        {/* name of current course */}
        <div className={classes.nameOfCurrentCourse}>{courseName}</div>
        {/* all weeks */}
        {modules.week.map((week, index) => {
          return (
            <Fragment key={index}>
              <div className={classes.weekName}>Week {index + 1}</div>
              {week.introductionCompleted.map((introduction, index) => {
                return (
                  <div key={index} className={classes.wrapIntroductionSection}>
                    <i
                      className={`fa fa-check ${classes.checkmark} ${
                        introduction ? classes.checked : classes.unchecked
                      }`}
                      aria-hidden="true"
                    ></i>
                    <span className={classes.introductionTxt}>
                      {" "}
                      Introduction
                    </span>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
export default WeekActivities;
