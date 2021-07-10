import ImageSection from "./imageSection";
import classes from "./yourOptions.module.css";

function YourOptions() {
  return (
    <div className={classes.body}>
      <ImageSection
        classes={classes}
        image={process.env.PUBLIC_URL + "/image1.png"}
        text="Advice a startup"
      />
      <ImageSection
        classes={classes}
        image={process.env.PUBLIC_URL + "/image2.png"}
        text="Join Minorities Ventures Cohort"
      />
      <ImageSection
        classes={classes}
        image={process.env.PUBLIC_URL + "/image3.png"}
        text="Help <Code/>"
      />
    </div>
  );
}
export default YourOptions;
