import classes from "./gradientBkg.module.css";
function GradientBkg({ children, className, style }) {
  return (
    <div className={`${classes.gradientBkg} ${className}`} style={style}>
      {children}
    </div>
  );
}
export default GradientBkg;
