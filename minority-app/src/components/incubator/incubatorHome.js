import { Fragment, useCallback, useEffect, useState } from "react";
import NavBar from "../mainHelper/navBar/navBar";
import LargeImage from "./incubatorComponent/LargeImage/largeImage";
import incubatorClass from "./incubator.module.css";
import Startup from "./incubatorComponent/startups/startups";

import YourOptions from "./incubatorComponent/yourOptions/yourOptions";
import $ from "jquery";
import { useDataContext } from "../../context/data";

const root = {
  //percentages
  sizeOne: 25,
  sizeTwo: 100 / 3,
  sizeThree: 50,
  sizeFour: 100,
  sizeUnit: "%",

  //rem
  gap: 1.35,
  gapUnit: "rem",
};
const breakpoints = [
  { breakpoint: 1491, size: root.sizeTwo },
  { breakpoint: 1195, size: root.sizeThree },
  { breakpoint: 875, size: root.sizeFour },
];

function IncubatorHome() {
  const dataStorage = useDataContext();
  let data = dataStorage.getDataFromStorage();
  const [loadMore, setLoadMore] = useState(-1);
  const [currentSize, setCurrentSize] = useState(root.sizeOne);
  useEffect(() => {
    if (loadMore >= 0) {
      dataStorage.renderMoreStartups(loadMore);
      setLoadMore(-1);
    }
  }, [loadMore, dataStorage]);

  const resizeHandler = useCallback(() => {
    for (let i of breakpoints.sort((a, b) => a.breakpoint - b.breakpoint)) {
      if ($(window).width() <= i.breakpoint) {
        if (currentSize !== i.size) {
          setCurrentSize(i.size);
        }
        return;
      }
    }
    if (currentSize !== root.sizeOne) {
      setCurrentSize(root.sizeOne);
    }
  }, [currentSize]);
  useEffect(() => {
    resizeHandler();
  });
  useEffect(() => {
    $(window).on("resize", resizeHandler);
    return () => {
      $(window).off("resize");
    };
  }, [currentSize, resizeHandler]);
  return (
    <Fragment>
      <NavBar />
      <LargeImage />
      <div className={incubatorClass.body}>
        {!dataStorage.isDataEmpty() ? (
          <Startup
            sectionName={data[0].sectionName}
            sectionDescription={data[0].sectionDescription}
            displayType={data[0].displayType}
            listOfStartups={data[0].allStartUps}
            index={0}
            root={root}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            breakpoints={breakpoints}
          />
        ) : null}
        <YourOptions />
        {data.length === 2 ? (
          <Startup
            id="startups"
            sectionName={data[1].sectionName}
            sectionDescription={data[1].sectionDescription}
            displayType={data[1].displayType}
            listOfStartups={data[1].allStartUps}
            index={1}
            setLoadMore={setLoadMore}
            root={root}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            breakpoints={breakpoints}
          />
        ) : null}
      </div>
    </Fragment>
  );
}
export default IncubatorHome;
