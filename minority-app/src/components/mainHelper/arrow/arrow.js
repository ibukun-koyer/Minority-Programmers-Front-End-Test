import classes from "../../../components/incubator/incubatorComponent/startups/startups.module.css";
function Arrow({ style, onClick, dir }) {
  return (
    <div
      className={`${classes.containArrow} ${
        dir === "right" ? classes.right : classes.left
      }`}
      style={style}
      onClick={onClick}
    >
      <span className={classes.wrapArrow}>
        <img
          src={process.env.PUBLIC_URL + "/Arrow right.png"}
          alt="arrow"
          className={classes.arrow}
        />
      </span>
    </div>
  );
}
export default Arrow;
