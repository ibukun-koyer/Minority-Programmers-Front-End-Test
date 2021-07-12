
import { Link } from "react-router-dom";
import classes from "./implementPathArray.module.css";
function ImplementPathArray({ min = 1, max = 2, id, tag }) {
  let intId = parseInt(id);
  return (
    <div className={classes.arrowContainer}>
      <Link to={intId - 1 >= min ? `${tag}${intId - 1}` : `${tag}${intId}`}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </Link>
      <Link to={intId + 1 <= max ? `${tag}${intId + 1}` : `${tag}${intId}`}>
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
export default ImplementPathArray;
