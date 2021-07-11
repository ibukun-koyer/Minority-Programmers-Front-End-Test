import { btnText } from "../../../incubator/incubatorComponent/yourOptions/yourOptions.module.css";
import {
  btn,
  wrapBtn,
} from "../../../incubator/incubatorComponent/startups/startups.module.css";
import LearnLandingSegment from "./learnLandingSegment/learnLandingSegment";

function LearnLandingComponent({ components }) {

  return (
    <div>
      {components.map((component, index) => {
        return (
          <div key={index}>
            <LearnLandingSegment component={component} />
          </div>
        );
      })}

      <div className={wrapBtn}>
        <button
          className={`${btnText} ${btn}`}
          onClick={() => console.log("There is nothing to load")}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
export default LearnLandingComponent;
