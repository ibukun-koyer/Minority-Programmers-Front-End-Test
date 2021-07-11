import classes from "../../learn/learnLanding/learnLanding.module.css";
function GradientBorder({ style, children, className }) {
  return (
    <div className={`${classes.borderImage} ${className}`} style={style}>
      <div className={classes.bkgColor}>
        <div className={classes.card}>
          {children}
          <div className={classes.lowerGradient}></div>
        </div>
      </div>
    </div>
  );
}
export default GradientBorder;
