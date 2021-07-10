import classes from "./largeImage.module.css";
import $ from "jquery";
function LargeImage() {
  return (
    <div className={classes.body}>
      <img
        src={process.env.PUBLIC_URL + "/phone.png"}
        alt="phone"
        className={classes.phoneImage}
      />
      <div className={classes.heroText}>
        <h1>Invest directly into minority innovations.</h1>
        <button
          onClick={() => {
            console.log("move to startups");
            $("#startups").get(0).scrollIntoView(true);
          }}
        >
          View Startups
        </button>
      </div>
    </div>
  );
}
export default LargeImage;
