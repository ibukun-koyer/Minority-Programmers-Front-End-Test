import { useCallback, useLayoutEffect, useRef, useState } from "react";
import homeClasses from "./home.module.css";
import $ from "jquery";
//import home pages
import Landing from "./homeSections/landing";
import AboutUs from "./homeSections/aboutUs";
import Team from "./homeSections/team";
import Testimonials from "./homeSections/testimonials";
import Contact from "./homeSections/contact";

//import helpers
import WrapHomeSection from "./helperFiles/wrapHomeSection";
class pagesOnHome {
  constructor(component, id, ref, title, animationDirection) {
    this.component = component;
    this.id = id;
    this.ref = ref;
    this.title = title;
    this.animationDirection = animationDirection;
  }
}

function Home() {
  //selected mode
  const [mode, setMode] = useState("");
  //current page
  const [currentSection, setCurrentSection] = useState(0);
  //references to all pages
  const landingRef = useRef();
  const aboutUsRef = useRef();
  const teamRef = useRef();
  const testimonialsRef = useRef();
  const contactRef = useRef();
  //page info array
  const pagesInfo = [
    new pagesOnHome(Landing, "landing", landingRef, "Landing", "up"),
    new pagesOnHome(AboutUs, "aboutUs", aboutUsRef, "About", "right"),
    new pagesOnHome(Team, "team", teamRef, "Team", "down"),
    new pagesOnHome(
      Testimonials,
      "testimonials",
      testimonialsRef,
      "Testimonials",
      "left"
    ),
    new pagesOnHome(Contact, "contact", contactRef, "Contact", "up"),
  ];
  //default panel height
  const [height, setHeight] = useState($(window).height() + "px");
  const resize = useCallback(() => {
    //resize panel heights
    if (window.screen.width > 500) {
      let window_innerheight = $(window).height();
      let deviceHeightMinusToolBar =
        window.screen.height - (window.outerHeight - window_innerheight);

      if (deviceHeightMinusToolBar >= window_innerheight) {
        let newHeight = deviceHeightMinusToolBar + "px";

        if (height !== newHeight) setHeight(newHeight);
      } else {
        let newHeight = window_innerheight + "px";
        if (height !== newHeight) setHeight(newHeight);
      }
    }
  }, [height]);
  useLayoutEffect(() => {
    if (window.localStorage) {
      let currMode = localStorage.getItem("mode");
      if (currMode) {
        setMode(currMode);
      } else {
        let newMode = "light";
        localStorage.setItem("mode", newMode);
        setMode(newMode);
      }
    }
  }, []);
  useLayoutEffect(() => {
    //start up configurations
    resize();
  }, []);
  useLayoutEffect(() => {
    //resize check
    $(window).on("resize", resize);
    return () => {
      $(window).off("resize", resize);
    };
  }, [resize]);

  const testColor = ["red", "black", "green", "teal", "gold"];
  return (
    <div className={homeClasses.fullScreen} style={{ height }}>
      {pagesInfo.map((section, index) => {
        return (
          <WrapHomeSection
            color={testColor[index]}
            height={height}
            key={section.id}
            className={homeClasses.panel}
          >
            <section.component
              homeClass={homeClasses}
              mode={mode}
              setMode={setMode}
            />
          </WrapHomeSection>
        );
      })}
    </div>
  );
}
export default Home;
