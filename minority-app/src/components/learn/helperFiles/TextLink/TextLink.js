import { Link } from "react-router-dom";

import classes from "../../learnModules/weekFullInfo/weekFullInfo.module.css";
import removeHover from "./textLink.module.css";
function TextLink({
  tag = "",
  parentLink,
  index,
  children,
  style,
  className = "",
  turnOffLink,
}) {
  const string = `${tag} ${parseInt(index) + 1} - ${children}`;

  return (
    <div
      className={`${classes.FullInfoCardHeader} ${className} ${
        turnOffLink ? removeHover.removeHover : ""
      }`}
      style={style}
    >
      {turnOffLink ? (
        string
      ) : (
        <Link to={`${parentLink}/${tag.toLowerCase()}${index + 1}`}>
          {string}
        </Link>
      )}
    </div>
  );
}
export default TextLink;
