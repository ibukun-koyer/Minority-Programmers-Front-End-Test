import GradientBkg from "../helperFiles/gradientBkg/gradientBkg";
import classes from "../learnModules/weekFullInfo/weekFullInfo.module.css";

function TemplateSectionOne({ style, className="", children }) {
  return (
    <GradientBkg className={`${classes.myGradient} ${className}`} style={style}>
      {children}
    </GradientBkg>
  );
}
export default TemplateSectionOne;
