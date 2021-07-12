import classes from "./incubatorBranchLanding.module.css";
import {useParams } from "react-router-dom";
import NavBar from "../../mainHelper/navBar/navBar";
import { useDataContext } from "../../../context/data";
import { useEffect, useState, Fragment } from "react";
import { body } from "../incubator.module.css";
import TopBar from "./topBar/topBar";
import LeftBar from "./bodyBars/leftBar/leftBar";
import RightBar from "./bodyBars/rightBar/rightBar";
import ErrorHandler from "../../mainHelper/errorHandler/errorHandler";

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
        <ErrorHandler
          pageData={pageData}
          errorMessage="Oops, Startup unavailable"
          reason="This happened because the browser was refreshed leading to a new randomly generated data being generated."
        >
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
        </ErrorHandler>
      </div>
    </div>
  );
}
export default IncubatorBranchLanding;
