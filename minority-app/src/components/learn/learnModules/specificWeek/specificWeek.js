import classes from "./specificWeek.module.css";
import TemplateCard from "../../learnPageTemplates/TemplateCard";
import TemplateContainer from "../../learnPageTemplates/TemplateContainer";
import TemplateSectionOne from "../../learnPageTemplates/TemplateSectionOne";
import TemplateSectionTwo from "../../learnPageTemplates/TemplateSectionTwo";
import { useParams } from "react-router";
import ProgressVis from "../../helperFiles/ProgressVis/progressVis";
import TextLink from "../../helperFiles/TextLink/TextLink";
import ImplementPathArray from "../../helperFiles/implementPathArray/implementPathArray";

import { v4 as uuidv4 } from "uuid";
function SpecificWeek({ course, hideWeekActivities, setClickedNav }) {
  const { weekid } = useParams();

  let thisWeekData = course.modules.week[weekid - 1];

  return (
    <TemplateContainer
      hideWeekActivities={hideWeekActivities}
      setClickedNav={setClickedNav}
    >
      <TemplateSectionOne className={classes.section1}>
        <h1>Week {weekid}</h1>
        <h2>Progress</h2>
        <div className={classes.total}>
          {thisWeekData.activitiesCompleted}/{thisWeekData.totalActivities}
        </div>
        <ProgressVis
          progress={thisWeekData.amountCompleted}
          className={classes.progressVis}
        />
        <p className={classes.total} style={{ marginTop: "1.5rem" }}>
          {thisWeekData.amountCompleted}% Completed
        </p>
      </TemplateSectionOne>
      <TemplateSectionTwo
        style={{ paddingTop: 0, position: "relative", isolation: "isolate" }}
      >
        <ImplementPathArray
          id={weekid}
          tag={"week"}
          max={course.modules.week.length}
        />
        {thisWeekData.activities.activity.map((activity, index) => {
          console.log(activity.document.videoLink);
          return (
            <TemplateCard
              key={uuidv4()}
              progress={activity.status}
              className={classes.card}
            >
              <video className={classes.video}>
                <source src={activity.document.videoLink} />
              </video>
              <TextLink
                tag="Activity"
                parentLink={window.location.pathname}
                index={index}
              >
                {activity.document.videoTitle}
              </TextLink>
            </TemplateCard>
          );
        })}
      </TemplateSectionTwo>
    </TemplateContainer>
  );
}
export default SpecificWeek;
