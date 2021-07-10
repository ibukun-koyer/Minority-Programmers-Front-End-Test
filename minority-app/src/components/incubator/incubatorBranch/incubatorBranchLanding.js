import classes from "./incubatorBranchLanding.module.css";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "../../mainHelper/navBar/navBar";
import { useDataContext } from "../../../context/data";
import { useEffect, useState, Fragment } from "react";
import { body } from "../incubator.module.css";
import TopBar from "./topBar/topBar";
import LeftBar from "./bodyBars/leftBar/leftBar";
import RightBar from "./bodyBars/rightBar/rightBar";

function IncubatorBranchLanding() {
  const dataStorage = useDataContext();
  const [pageData, setPageData] = useState(undefined);
  const { id } = useParams();
  useEffect(() => {
    setPageData(dataStorage.queryId(id));
  }, [dataStorage, id]);

  return (
    <div className={`${classes.body}`}>
      <NavBar />
      <div className={` ${body} ${classes.minHeight}`}>
        {pageData === undefined ? (
          <div className={classes.wrapError}>
            <div className={classes.load}></div>
          </div>
        ) : Object.keys(pageData).length === 0 ? (
          <div className={classes.wrapError}>
            <div className={classes.report}>
              <h1>Oops, Startup unavailable</h1>
              <p>
                This could be happening because the data being fetched does not
                exist or was recently deleted.
              </p>
            </div>
          </div>
        ) : (
          <Fragment>
            <div className={classes.bottomGap}>
              <TopBar pageData={pageData} />
            </div>
            <div className={classes.containBody}>
              <div className={classes.firstDiv}>
                <LeftBar pageData={pageData} />
              </div>
              <div className={classes.secondDiv}>
                <RightBar pageData={pageData} />

              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
export default IncubatorBranchLanding;
