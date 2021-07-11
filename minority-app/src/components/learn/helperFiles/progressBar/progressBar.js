import myClasses from "./progressBar.module.css";
import classes from "../../learnLanding/learnLanding.module.css";
const text = ["Completed", "In progress", "Start"];
function ProgressBar({ progress }) {
  return (
    <div
      className={`${classes.cardPromotion} ${
        progress === 0
          ? myClasses.start
          : progress > 0 && progress < 100
          ? myClasses.inProgress
          : myClasses.complete
      }`}
    >
      {progress === 0
        ? text[2]
        : progress > 0 && progress < 100
        ? text[1]
        : text[0]}
    </div>
  );
}
export default ProgressBar;
