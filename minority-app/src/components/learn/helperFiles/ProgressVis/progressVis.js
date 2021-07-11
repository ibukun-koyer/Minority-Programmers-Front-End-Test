import classes from "../../learnLanding/learnLanding.module.css";

function ProgressVis({ progress, style = {}, className }) {
  return (
    <div
      className={`${classes.fullBarCard} ${className}`}
      style={{ width: "50%", ...style }}
    >
      <div
        className={classes.actualBarCard}
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
}
export default ProgressVis;
