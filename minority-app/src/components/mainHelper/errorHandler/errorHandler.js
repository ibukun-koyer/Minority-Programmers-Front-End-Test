import { Fragment } from "react";

import classes from "../../incubator/incubatorBranch/incubatorBranchLanding.module.css";
import { body } from "../../incubator/incubator.module.css";
function ErrorHandler({ pageData, children, errorMessage, reason }) {
  return (
    <Fragment>
      {pageData === undefined ? (
        <div className={`${classes.body} ${classes.minHeight} ${body}`}>
          <div className={classes.wrapError}>
            <div className={classes.load}></div>
          </div>
        </div>
      ) : Object.keys(pageData).length === 0 ? (
        <div className={`${classes.body} ${classes.minHeight} ${body}`}>
          <div className={classes.wrapError}>
            <div className={classes.report}>
              <h1>{errorMessage}</h1>
              <p>{reason}</p>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </Fragment>
  );
}
export default ErrorHandler;
