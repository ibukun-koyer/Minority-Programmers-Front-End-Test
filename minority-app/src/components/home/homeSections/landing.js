import { useCallback, useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const pages = ["home", "incubator", "learn"];
function Landing({ homeClass, mode, setMode, height }) {
  const [shouldFixNav, setShouldFixNav] = useState(false);
  const [minimizeNav, setMinimizeNav] = useState(false);
  const [shouldNewNav, setShouldNewNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  function modeChange(newMode) {
    if (mode !== newMode) {
      localStorage.setItem("mode", newMode);
      setMode(newMode);
    }
  }

  const onScroll = useCallback(() => {
    if ($(window).scrollTop() >= 5) {
      if (!shouldFixNav) {
        setShouldFixNav(true);
      }
    } else {
      if (shouldFixNav) {
        setShouldFixNav(false);
      }
    }
  }, [shouldFixNav]);
  const onResize = useCallback(
    (e) => {
      if ($(window).width() >= 975) {
        if (!minimizeNav) {
          setShouldNewNav(false);
          setMinimizeNav(true);
        }
      } else {
        if (minimizeNav) {
          setMinimizeNav(false);
        }
      }
    },
    [minimizeNav]
  );

  useEffect(() => {
    onScroll();
    onResize();
  }, []);

  useEffect(() => {
    $(window).on("scroll", onScroll);
    return () => {
      $(window).off("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    $(window).on("resize", onResize);
    return () => {
      $(window).off("resize", onResize);
    };
  }, [onResize]);

  const navOptions = (
    <ul>
      {pages.map((page, index) => {
        return (
          <li
            className={page === currentPage ? homeClass.selectedNav : ""}
            onClick={() => {
              if (page !== currentPage) {
                setCurrentPage(page);
              }
            }}
            key={index}
          >
            <Link to={`/${index === 0 ? "" : page}`}>{page}</Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <div
      className={`${homeClass.landing} ${homeClass[mode + "Mode"]}`}
      style={{ height }}
    >
      <nav
        className={`${shouldFixNav ? homeClass.fixNav : homeClass.nav} ${
          shouldNewNav ? homeClass.sideNav : ""
        }`}
      >
        <img
          src="https://minorityprogrammers.com/assets/images/mpicon.svg"
          alt="title"
        />
        {minimizeNav ? (
          navOptions
        ) : (
          <i
            className={`fa fa-bars ${homeClass.landingNavBars}`}
            aria-hidden="true"
            onClick={() => setShouldNewNav((prev) => !prev)}
          ></i>
        )}
        {shouldNewNav ? <div>{navOptions}</div> : null}
      </nav>

      <div
        className={`${homeClass.dark} ${
          mode === "dark" ? homeClass.modeSelected : ""
        }`}
        onClick={() => {
          modeChange("dark");
        }}
      >
        Dark mode
      </div>
      <div
        className={`${homeClass.light} ${
          mode === "light" ? homeClass.modeSelected : ""
        }`}
        onClick={() => {
          modeChange("light");
        }}
      >
        Light mode
      </div>
      <div className={homeClass.landingClipWrap}>
        <div className={homeClass.landingClip}>
          <div className={homeClass.landingDottedLine}></div>
          <div className={homeClass.landingText}>
            <div className={homeClass.landingWrapJoin}>
              <button className={homeClass.landingJoin}>Join</button>
            </div>
            <h1>Minority Programmers Association</h1>

            <div className={homeClass.landingTextInvert}></div>

            <div className={homeClass.landingWrapJoin}>
              <button className={homeClass.landingJoin}>Join</button>
            </div>
            <div className={homeClass.landingButtonWrap}>
              <button className={homeClass.landingButton}>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
