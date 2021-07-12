import { useHistory } from "react-router";
import GradientBorder from "../../../../mainHelper/gradientBorder/gradientBorder";


function LearnLandingCard({ classes, course }) {
  const history = useHistory();

  const {
    courseName,
    courseDescription,
    courseID,
    modulesCompleted,
    totalModules,
    promotion,
  } = course;
  function clickHandler() {
    history.push(`/learn/${courseID}`);
  }
  return (
    <GradientBorder
      style={{ color: "white" }}
      className={classes.sizeOfLandingCard}
    >
      <h1 className={classes.landingCardH1}>{courseName}</h1>
      <div className={classes.landingCardDes}>{courseDescription}</div>
      <div className={classes.wrapCardBtn}>
        <button className={classes.cardBtn} onClick={clickHandler}>
          Learn
        </button>
      </div>
      <div className={classes.wrapModulesNum}>
        <span className={classes.moduleNum}>
          {modulesCompleted}/{totalModules} Modules
        </span>
      </div>
      <div className={classes.fullBarCard}>
        <div
          className={classes.actualBarCard}
          style={{ width: `${(modulesCompleted / totalModules) * 100}%` }}
        ></div>
      </div>
      <div className={classes.cardPromotion}>
        <div className={classes.cardPromotionCircle}></div> {promotion}
      </div>
      <div className={classes.percentageModule}>
        {`${(modulesCompleted / totalModules) * 100}%`} Completed
      </div>
    </GradientBorder>
  );
}
export default LearnLandingCard;
