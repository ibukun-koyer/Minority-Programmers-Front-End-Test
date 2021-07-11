import classes from "./gradientBkg.module.css";
function GradientBkg({ children, className }) {
  return (
    <div className={`${classes.gradientBkg} ${className}`}>{children}</div>
  );
}
export default GradientBkg;
