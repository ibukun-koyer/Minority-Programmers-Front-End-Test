import GradientBkg from "../helperFiles/gradientBkg/gradientBkg";
import classes from "../learnModules/weekFullInfo/weekFullInfo.module.css";

function TemplateSectionOne({
  style = {},
  className = "",
  children,
  turnOffGradient,
}) {
  return (
    <GradientBkg
      className={`${classes.myGradient} ${className}`}
      style={{ ...style, background: turnOffGradient ? "var(--bkgColor)" : "" }}
    >
      {children}
    </GradientBkg>
  );
}
export default TemplateSectionOne;
