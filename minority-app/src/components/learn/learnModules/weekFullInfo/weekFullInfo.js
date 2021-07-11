import { useEffect, useRef } from "react";
import GradientBorder from "../../../mainHelper/gradientBorder/gradientBorder";
import GradientBkg from "../../helperFiles/gradientBkg";
import ProgressBar from "../../helperFiles/progressBar/progressBar";
import classes2 from "../../learnLanding/learnLanding.module.css";
import classes from "./weekFullInfo.module.css";
import $ from "jquery";

function WeekFullInfo({
  course,
  hideWeekActivities,
  setClickedNav,
  clickedNav,
}) {
  // bodyRef.current ? $(bodyRef.current)?.width : ""
  const { currentUser, courseCompletion, modules } = course;

  return (
    <div className={classes.body}>
      {hideWeekActivities ? (
        <div className={`${classes.wrapNav} ${classes.nav}`}>
          <i
            className={`fa fa-bars `}
            aria-hidden="true"
            onClick={() => setClickedNav((prev) => !prev)}
          ></i>
        </div>
      ) : null}
      <GradientBkg className={classes.myGradient}>
        <div className={classes.avatarContainer}>
          <img
            src={currentUser.avatar}
            alt="avatar"
            className={classes.avatar}
          />
        </div>

        <div className={classes.textContainer}>
          <div className={classes.welcomeText}>
            Welcome back, {currentUser.username}
          </div>
          <div className={classes.conpletionData}>
            {courseCompletion}% Complete
          </div>
          <div className={classes.wrapBtn}>
            <button className={classes.btn}>Resume</button>
          </div>
        </div>
      </GradientBkg>
      <div className={classes.wrapBody}>
        <div className={classes.weekFullData}>
          <div className={classes.topMenu}>
            <ul>
              <li className={classes.selected}>Modules</li>
              <li>Calender</li>
              <li>Messages</li>
            </ul>
          </div>
        </div>
        {modules.week.map((module, index) => {
          //   this.title = "Fundamentals of Cryptocurrency";
          //   this.amountCompleted = randomProgress();
          //   this.introductionCompleted = [true, true, false];
          //   this.activities = new activities();
          return (
            <GradientBorder
              key={index}
              className={classes.gradientBorder}
              classForCard={classes.cardEdit}
            >
              <div className={classes.FullInfoCardHeader}>
                Week {index + 1} - {module.title}
              </div>
              <div className={classes2.fullBarCard} style={{ width: "50%" }}>
                <div
                  className={classes2.actualBarCard}
                  style={{
                    width: `${module.amountCompleted}%`,
                  }}
                ></div>
              </div>
              <div className={classes.amountCompleted}>
                {module.amountCompleted}% Completed
              </div>
              <ProgressBar progress={module.amountCompleted} />
            </GradientBorder>
          );
        })}
      </div>
    </div>
  );
}
export default WeekFullInfo;
