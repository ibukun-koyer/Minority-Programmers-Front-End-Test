import classes from "../learnModules/weekFullInfo/weekFullInfo.module.css";

function TemplateContainer({ hideWeekActivities, setClickedNav, children }) {
  return (
    <div className={classes.body}>
      {hideWeekActivities ? (
        <div className={`${classes.wrapNav} ${classes.nav}`}>
          <i
            className={`fa fa-bars `}
            aria-hidden="true"
            onClick={() => setClickedNav((prev) => !prev)}
          ></i>
        </div>
      ) : null}
      {children}
    </div>
  );
}
export default TemplateContainer;
