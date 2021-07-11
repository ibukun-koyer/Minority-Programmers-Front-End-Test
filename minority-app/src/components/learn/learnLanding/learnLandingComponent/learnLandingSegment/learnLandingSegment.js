import { Fragment, useRef } from "react";
import $ from "jquery";
import classes from "../../learnLanding.module.css";
import carouselMove from "../../../../mainHelper/carouselMove/carouselMove";
import LearnLandingCard from "../learnLandingCard/learnLandingCard";

function LearnLandingSegment({ component }) {
  const carouselRef = useRef();


  function onClick(dir) {
    const width = $(carouselRef.current).width();

    carouselMove(dir, width, carouselRef);
  }
  return (
    <Fragment>
      <div className={classes.segmentHeader}>
        <span className={classes.segmentHeaderText}>
          {component.segmentName}
        </span>
        <div className={classes.containLine}>
          <hr />
        </div>
        <div className={classes.startupControl}>
          <img
            src={process.env.PUBLIC_URL + "/Arrow right.png"}
            alt="arrow"
            className={classes.left}
            onClick={() => {
              onClick("backward");
            }}
          />
          <img
            src={process.env.PUBLIC_URL + "/Arrow right.png"}
            alt="arrow"
            className={classes.right}
            onClick={() => {
              onClick("forward");
            }}
          />
        </div>
      </div>
      <div className={classes.carouselContainer} ref={carouselRef}>
        {component.courses.map((course, index) => {

          return (
            <LearnLandingCard
              classes={classes}
              course={course}
              key={course.courseID}
            />
          );
        })}
      </div>
    </Fragment>
  );
}
export default LearnLandingSegment;
