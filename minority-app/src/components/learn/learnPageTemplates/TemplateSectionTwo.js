import classes from "../learnModules/weekFullInfo/weekFullInfo.module.css";
function TemplateSectionTwo({ children, style, className = "" }) {
  return (
    <div className={`${classes.wrapBody} ${className}`} style={style}>
      {children}
    </div>
  );
}
export default TemplateSectionTwo;
