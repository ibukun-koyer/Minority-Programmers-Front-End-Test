import ProgressVis from "../../helperFiles/ProgressVis/progressVis";
import TextLink from "../../helperFiles/TextLink/TextLink";
import TemplateCard from "../../learnPageTemplates/TemplateCard";
import TemplateContainer from "../../learnPageTemplates/TemplateContainer";
import TemplateSectionOne from "../../learnPageTemplates/TemplateSectionOne";
import TemplateSectionTwo from "../../learnPageTemplates/TemplateSectionTwo";
import classes from "./weekFullInfo.module.css";

function WeekFullInfo({ course, hideWeekActivities, setClickedNav }) {
  const { currentUser, courseCompletion, modules } = course;

  return (
    <TemplateContainer
      hideWeekActivities={hideWeekActivities}
      setClickedNav={setClickedNav}
    >
      <TemplateSectionOne>
        <div className={classes.avatarContainer}>
          <img
            src={currentUser.avatar}
            alt="avatar"
            className={classes.avatar}
          />
        </div>

        <div className={classes.textContainer}>
          <div className={classes.welcomeText}>
            Welcome back, {currentUser.username}
          </div>
          <div className={classes.conpletionData}>
            {courseCompletion}% Complete
          </div>
          <div className={classes.wrapBtn}>
            <button className={classes.btn}>Resume</button>
          </div>
        </div>
      </TemplateSectionOne>
      <TemplateSectionTwo>
        <div className={classes.weekFullData}>
          <div className={classes.topMenu}>
            <ul>
              <li className={classes.selected}>Modules</li>
              <li>Calender</li>
              <li>Messages</li>
            </ul>
          </div>
        </div>
        {modules.week.map((module, index) => {
          return (
            <TemplateCard key={index} progress={module.amountCompleted}>
              <TextLink
                tag="Week"
                parentLink={window.location.pathname}
                index={index}
              >
                {module.title}
              </TextLink>
              <ProgressVis progress={module.amountCompleted} />
              <div className={classes.amountCompleted}>
                {module.amountCompleted}% Completed
              </div>
            </TemplateCard>
          );
        })}
      </TemplateSectionTwo>
    </TemplateContainer>
  );
}
export default WeekFullInfo;
