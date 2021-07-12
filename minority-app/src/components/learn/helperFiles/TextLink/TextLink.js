import { Link } from "react-router-dom";

import classes from "../../learnModules/weekFullInfo/weekFullInfo.module.css";

function TextLink({
  tag = "",
  parentLink,
  index,
  children,
  style,
  className = "",
}) {
  return (
    <div className={`${classes.FullInfoCardHeader} ${className}`} style={style}>
      <Link to={`${parentLink}/${tag.toLowerCase()}${index + 1}`}>
        {tag} {index + 1} - {children}
      </Link>
    </div>
  );
}
export default TextLink;
