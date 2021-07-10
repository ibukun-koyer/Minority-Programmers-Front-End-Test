import { Fragment, useCallback, useEffect, useState } from "react";
import NavBar from "../mainHelper/navBar/navBar";
import LargeImage from "./incubatorComponent/LargeImage/largeImage";
import incubatorClass from "./incubator.module.css";
import Startup from "./incubatorComponent/startups/startups";
import { v4 as uuidv4 } from "uuid";
import YourOptions from "./incubatorComponent/yourOptions/yourOptions";
import $ from "jquery";
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
function createStartup() {
  return {
    image: process.env.PUBLIC_URL + "/startupIcon.png",
    startupName: "Mangoswap",
    description:
      "The mango swap coin is the future for crypto currency, it will allow user share and transact over defi networks with less fees.",
    fundRaised: 200000,
    totalFund: 400000,
    userID: uuidv4(),
  };
}

function generateXStartUps({ minimum = 4, fixedAmt }) {
  const obj = [];
  let total;

  if (!fixedAmt) {
    total = Math.floor(Math.random() * 10) + 1;
    if (total < minimum) {
      total = minimum;
    }
  } else {
    total = fixedAmt;
  }

  for (let i = 0; i < total; i++) {
    obj.push(createStartup());
  }
  return obj;
}
const data = [
  {
    sectionName: "Featured Startups",
    sectionDescription: "Invest in the next billion dollar company today",
    //where 0 is carousel, and 1 is overflow
    displayType: 0,
    allStartUps: generateXStartUps({}),
  },
  {
    sectionName: "Upcoming Startups",
    sectionDescription:
      "These visionaries companies and disruptors are on their journey to change the world",
    //where 0 is carousel, and 1 is overflow
    displayType: 1,
    allStartUps: generateXStartUps({ fixedAmt: 11 }),
  },
];

const fixedAmtOfDataGottenFromServer = 12;
function IncubatorHome() {
  const [loadMore, setLoadMore] = useState(-1);
  const [currentSize, setCurrentSize] = useState(root.sizeOne);
  useEffect(() => {
    if (loadMore >= 0) {
      for (let i = 0; i < fixedAmtOfDataGottenFromServer; i++) {
        data[loadMore].allStartUps.push(createStartup());
      }
      setLoadMore(-1);
    }
  }, [loadMore]);
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
        <YourOptions />
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
      </div>
    </Fragment>
  );
}
export default IncubatorHome;
