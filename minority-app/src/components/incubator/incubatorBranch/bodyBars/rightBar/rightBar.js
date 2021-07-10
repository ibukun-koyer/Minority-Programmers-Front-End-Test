import { Fragment, useRef } from "react";
import carouselMove from "../../../../mainHelper/carouselMove/carouselMove";
import Card from "../../../incubatorComponent/card/card";
import classes from "../../incubatorBranchLanding.module.css";
import $ from "jquery";

const widthOfCard = "20rem";
function RightBar({ pageData }) {
  const { aboutCompany, vision, relatedStartUps } = pageData;
  const carouselRef = useRef();
  function onClick(dir) {
    const width = $(carouselRef.current).width();

    carouselMove(dir, width, carouselRef);
  }
  return (
    <Fragment>
      <div className={classes.span}>
        {/* about startup */}
        <div className={` ${classes.padBody} ${classes.borderBottom}`}>
          <div className={` ${classes.largestText} ${classes.padOnlyBottom}`}>
            About startup
          </div>
          <p className={classes.paragraph}>{aboutCompany}</p>
        </div>{" "}
        {/* vision */}
        <div className={` ${classes.padBody}`}>
          <div className={` ${classes.largestText} ${classes.padOnlyBottom}`}>
            Vision
          </div>
          <p className={classes.paragraph}>{vision}</p>
        </div>
      </div>
      <div className={`${classes.span} ${classes.topGap}`}>
        {/* about startup */}
        <div className={` ${classes.padBody} ${classes.borderBottom}`}>
          <div
            className={` ${classes.largestText} ${classes.padOnlyBottom} ${classes.relative}`}
          >
            Related startups
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
          <div className={classes.carouselRelated} ref={carouselRef}>
            {relatedStartUps.map((startup, index) => {
              return (
                <Card
                  style={{
                    width: widthOfCard,
                    flexShrink: 0,
                    border: "1px solid #979797",
                    marginRight: "1rem",
                  }}
                  ignore
                  startup={startup}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default RightBar;
