import { useRef } from "react";
import $ from "jquery";
import carouselMove from "../../mainHelper/carouselMove/carouselMove";
class team {
  constructor(teamName, description, gradientClass) {
    this.teamName = teamName;
    this.description = description;
    this.gradientClass = gradientClass;
  }
}
function Team({ homeClass, mode }) {
  const teamsRef = useRef();

  function onClick(dir) {
    const width = $(teamsRef.current).width();

    carouselMove(dir, width, teamsRef);
  }

  const teams = [
    new team(
      "Development",
      "MPA's team of developers get applications that scale delivered to the people.",
      homeClass.teamGradient1
    ),
    new team(
      "Crypto",
      "MPA crypto team are specialist in the latest blockchain solutions.",
      homeClass.teamGradient2
    ),
    new team(
      "Business",
      "MPA Business team improves business functions, prioritizing revenue, strategic partnerships, and corporate social responsibility.",
      homeClass.teamGradient3
    ),
    new team(
      "Operations",
      "MPA Operations teams deals with the day-day nontechnical tasks.",
      homeClass.teamGradient4
    ),
  ];
  return (
    <div className={`${homeClass.team} ${homeClass[mode + "Mode"]}`}>
      <h1>Teams</h1>
      <div className={homeClass.teamArticle}>
        <div
          className={homeClass.teamArticleButtonWrap}
          onClick={() => {
            onClick("backward");
          }}
        >
          <div className={homeClass.teamArticleIconWrap}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
        </div>
        <div className={homeClass.teamArticleTeams} ref={teamsRef}>
          {teams.map((currTeam, index) => {
            return (
              <div
                className={`${homeClass.teamDimension} ${currTeam.gradientClass}`}
                key={index}
              >
                <h1 className={homeClass.teamHeader}>{currTeam.teamName}</h1>
                <p className={homeClass.teamDes}>{currTeam.description}</p>
                <div className={homeClass.teamIconWrap}>
                  <img
                    src="https://minorityprogrammers.com/assets/images/mpicon.svg"
                    alt="title"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={homeClass.teamArticleButtonWrap}
          onClick={() => {
            onClick("forward");
          }}
        >
          <div className={homeClass.teamArticleIconWrap}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
