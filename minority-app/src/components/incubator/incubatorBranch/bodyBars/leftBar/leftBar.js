import classes from "../../incubatorBranchLanding.module.css";
function LeftBar({ pageData }) {
  const { creationDate, website, location, teamSize, social, team, tags } =
    pageData;
  console.log(pageData);

  return (
    <div className={classes.span}>
      {/* SECTION 1 */}
      <div
        className={`${classes.founded} ${classes.padBody} ${classes.borderBottom}`}
      >
        Founded {creationDate}
      </div>
      {/* SECTION 2 */}
      <div
        className={`${classes.infoSec2} ${classes.padBody} ${classes.borderBottom}`}
      >
        {/* website */}
        <div className={classes.smallestText}>website</div>
        <div
          className={`${classes.linkToSocial} ${classes.largestText} ${classes.padOnlyBottom}`}
        >
          <a href={website}> {website}</a>

          <a href={social.twitter === "" ? "#" : social.twitter}>
            <img
              src={process.env.PUBLIC_URL + "/twitterBlue.png"}
              alt="twitter"
              className={classes.sizeOfSocialIcon}
            />
          </a>
          <a href={social.linkedin === "" ? "#" : social.linkedin}>
            <img
              src={process.env.PUBLIC_URL + "/linkedInBlue.png"}
              alt="linkedin"
              className={classes.sizeOfSocialIcon}
            />
          </a>
          <a href={social.facebook === "" ? "#" : social.facebook}>
            <img
              src={process.env.PUBLIC_URL + "/facebookBlue.png"}
              alt="facebook"
              className={classes.sizeOfSocialIcon}
            />
          </a>
        </div>
        {/* location */}
        <div className={classes.smallestText}>Location</div>
        <div className={` ${classes.largestText} ${classes.padOnlyBottom}`}>
          {location}
        </div>
        {/* team size */}
        <div className={classes.smallestText}>Team Size</div>
        <div className={` ${classes.largestText} `}>
          {teamSize.min}-{teamSize.max} people
        </div>
      </div>
      {/* SECTION 3 */}
      <div
        className={`${classes.infoSec3} ${classes.padBody} ${classes.borderBottom}`}
      >
        <div className={` ${classes.largestText} ${classes.padOnlyBottom}`}>
          Meet the team
        </div>
        {team.map((teammember, index) => {
          return (
            <div className={classes.teammate} key={index}>
              <div className={classes.containTeammateImage}>
                {teammember.imageUrl ? (
                  <img src={teammember.imageUrl} alt="urprofilepicture" />
                ) : null}
              </div>
              <div className={classes.containTeammateInfo}>
                <div
                  className={classes.teammateName}
                >{`${teammember.firstName} ${teammember.lastName}`}</div>
                <div className={classes.role}>{teammember.role}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* SECTION 4 */}
      <div className={`${classes.infoSec3} ${classes.padBody} `}>
        <div className={` ${classes.largestText} ${classes.padOnlyBottom}`}>
          Tags
        </div>
        <div className={classes.spaceOut}>
          {tags.map((tag, index) => {
            return (
              <span className={classes.tag} key={index}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default LeftBar;
