import Arrow from "../../../mainHelper/arrow/arrow";
import classes from "../incubatorBranchLanding.module.css";
import classes2 from "../../incubatorComponent/card/card.module.css";
import TitleAndImage from "./topBarComponents/titleAndImage";
import FundRaisedText from "./topBarComponents/fundRaisedText";
import FundRaisedBar from "./topBarComponents/fundRaisedBar";
import { useHistory } from "react-router";

function TopBar({ pageData }) {
  const { startupName, image, fundRaised, totalFund } = pageData;
  const history = useHistory();
  return (
    <div className={classes.topBar}>
      {/* arrow */}
      <Arrow
        style={{
          position: "relative",
          width: "fit-content",

          justifyContent: "flex-start",
          boxSizing: "border-box",
          filter: "invert(1)",
          left: 0,
        }}
        onClick={() => {
          history.replace("/incubator");
        }}
      />
      {/* title and image */}
      <TitleAndImage
        classes={classes}
        classes2={classes2}
        image={image}
        startupName={startupName}
      />
      {/* fund raised text */}
      <FundRaisedText
        classes={classes}
        classes2={classes2}
        fundRaised={fundRaised}
        totalFund={totalFund}
      />

      {/* fundRaised bar representation */}
      <FundRaisedBar
        classes={classes}
        classes2={classes2}
        fundRaised={fundRaised}
        totalFund={totalFund}
      />
      {/* button */}
      <button className={`${classes2.fundStartUpBtn} ${classes.gradientColor}`}>
        Fund Startup
      </button>
    </div>
  );
}
export default TopBar;
