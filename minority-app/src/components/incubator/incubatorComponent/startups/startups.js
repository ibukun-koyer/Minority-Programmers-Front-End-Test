import {
  Fragment,
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import classes from "./startups.module.css";
import Card from "../card/card";
import { btnText } from "../yourOptions/yourOptions.module.css";
import $ from "jquery";
import carouselMove from "../../../mainHelper/carouselMove/carouselMove";

function Startup({
  id,
  sectionName,
  sectionDescription,
  displayType,
  listOfStartups,
  index,
  setLoadMore,
  root,
  setCurrentSize,
  currentSize,
  breakpoints,
}) {
  const [animation, setAnimation] = useState([false, "forward"]);
  const objectRef = useRef();

  const sharedGap = `${root.gap / (100 / currentSize)}${root.gapUnit}`;

  const gridTemplateColumns = useMemo(() => {
    const number_of_boxes = 100 / currentSize - 1;
    return `repeat(${listOfStartups.length}, calc(${100 / number_of_boxes}${
      root.sizeUnit
    } - ${root.gap + root.gapUnit} + ${root.gap / (number_of_boxes + 1)}${
      root.gapUnit
    }))`;
  }, [
    currentSize,
    listOfStartups.length,
    root.gap,
    root.gapUnit,
    root.sizeUnit,
  ]);

  const descriptionDom = (
    <div
      style={{
        width: !displayType
          ? `calc(${currentSize}${root.sizeUnit} + ${sharedGap})`
          : "100%",

        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingRight: !displayType
          ? `calc(4rem + ${root.gap}${root.gapUnit} )`
          : "",
        boxSizing: "border-box",
      }}
    >
      <h1 className={classes.sectionName}>{sectionName}</h1>
      <p className={classes.sectionDes}>{sectionDescription}</p>
    </div>
  );
  const mapAllStartups = (
    <Fragment>
      {" "}
      {listOfStartups.map((startup) => {
        return (
          <Card
            style={{
              width: "100%",
              height: "100%",
              gridRow: !displayType ? 1 : "",
            }}
            startup={startup}
            key={startup.userID}
          />
        );
      })}
    </Fragment>
  );

  const click = useCallback(
    (dir) => {
      carouselMove(
        dir,
        $(objectRef.current).width() /
          (100 / currentSize - (currentSize === 100 ? 0 : 1)),
        objectRef
      );
    },
    [currentSize]
  );
  useEffect(() => {
    if (!displayType) {
      let interval = setInterval(() => {
        let direction;
        if (
          $(objectRef.current).scrollLeft() + $(objectRef.current).width() >=
            $(objectRef.current).get(0).scrollWidth ||
          (animation[1] === "backward" && $(objectRef.current).scrollLeft() > 0)
        ) {
          direction = "backward";
          click(direction);
        } else {
          direction = "forward";
          click(direction);
        }
        setAnimation((prev) => {
          return [!prev[0], direction];
        });
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [animation, click, displayType]);
  return (
    <Fragment>
      <div
        className={classes.body}
        style={{
          width: "100%",
          flexDirection: currentSize === 100 ? "column" : "",
        }}
        id={id}
      >
        {!displayType ? (
          <Fragment>
            {currentSize === 100 ? descriptionDom : null}
            <div className={classes.carousel}>
              {currentSize === 100 ? null : descriptionDom}
              <div
                style={{
                  width: `calc(100% - ${currentSize < 100 ? currentSize : 0}${
                    root.sizeUnit
                  })`,
                  gridTemplateColumns:
                    currentSize === 100
                      ? `repeat(${listOfStartups.length}, calc(${currentSize}${
                          root.sizeUnit
                        } - ${root.gap + root.gapUnit} + ${sharedGap}) )`
                      : gridTemplateColumns,
                  gap: root.gap + root.gapUnit,
                }}
                className={classes.carouselGrid}
                ref={objectRef}
              >
                {mapAllStartups}{" "}
              </div>
              <div
                className={`${classes.containArrow} ${classes.left}`}
                style={{
                  left:
                    currentSize === 100
                      ? `calc((${root.gap + root.gapUnit} + ${$("body").css(
                          "--arrowContainer"
                        )}) * -1)`
                      : `calc(${currentSize + root.sizeUnit} - ${
                          root.gap + root.gapUnit
                        } - ${$("body").css("--arrowContainer")})`,
                }}
                onClick={() => {
                  click("backward");
                }}
              >
                <span className={classes.wrapArrow}>
                  <img
                    src={process.env.PUBLIC_URL + "/Arrow right.png"}
                    alt="arrow"
                    className={classes.arrow}
                  />
                </span>
              </div>
              <div
                className={`${classes.containArrow} ${classes.right}`}
                style={{
                  right: `calc((${root.gap + root.gapUnit} + ${$("body").css(
                    "--arrowContainer"
                  )}) * -1)`,
                }}
                onClick={() => {
                  click("forward");
                }}
              >
                <span className={classes.wrapArrow}>
                  <img
                    src={process.env.PUBLIC_URL + "/Arrow right.png"}
                    alt="arrow"
                    className={classes.arrow}
                  />
                </span>
              </div>
            </div>
          </Fragment>
        ) : (
          <div
            className={classes.overflow}
            style={{
              gridTemplateColumns: `repeat(${
                100 / currentSize
              }, calc(${currentSize}${root.sizeUnit} - ${
                root.gap + root.gapUnit
              } + ${sharedGap}) )`,
              gap: root.gap + root.gapUnit,
            }}
          >
            {descriptionDom}
            {mapAllStartups}
          </div>
        )}
      </div>
      {displayType ? (
        <div className={classes.wrapBtn}>
          <button
            className={`${btnText} ${classes.btn}`}
            onClick={() => setLoadMore(index)}
          >
            Load More
          </button>
        </div>
      ) : null}
    </Fragment>
  );
}
export default Startup;
