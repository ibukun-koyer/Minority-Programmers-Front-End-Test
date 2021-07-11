import GradientBorder from "../../mainHelper/gradientBorder/gradientBorder";
import ProgressBar from "../helperFiles/progressBar/progressBar";
import classes from "../learnModules/weekFullInfo/weekFullInfo.module.css";

function TemplateCard({ className, style, children, progress }) {
  return (
    <GradientBorder
      className={classes.gradientBorder}
      classForCard={`${classes.cardEdit} ${className}`}
      style={style}
    >
      {children}
      <ProgressBar progress={progress} />
    </GradientBorder>
  );
}
export default TemplateCard;
