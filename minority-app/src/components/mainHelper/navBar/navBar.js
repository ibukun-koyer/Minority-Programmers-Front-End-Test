import { useCallback, useEffect, useState } from "react";
import navBarClass from "./navBar.module.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { pages } from "../pageNames";

function NavBar() {
  const [hideSocial, setHideSocial] = useState(false);
  const resize = useCallback(() => {
    if ($(window).width() < 935) {
      if (!hideSocial) {
        setHideSocial(true);
      }
    } else {
      if (hideSocial) {
        setHideSocial(false);
      }
    }
  }, [hideSocial]);
  useEffect(() => {
    resize();
  });
  useEffect(() => {
    $(window).on("resize", resize);
    return () => {
      $(window).off("resize", resize);
    };
  }, [resize]);
  return (
    <div className={navBarClass.nav}>
      <div className={navBarClass.section1}>
        <div className={navBarClass.svgIcon}>
          <img
            src={process.env.PUBLIC_URL + "/icon.png"}
            alt="title"
            className={navBarClass.navIconSize}
          />
        </div>
        <div
          className={`${navBarClass.social} ${
            hideSocial ? navBarClass.hide : ""
          }`}
        >
          <img
            src={process.env.PUBLIC_URL + "/twitter.png"}
            alt="twitter"
            className={navBarClass.navSocialSize}
          />
          <img
            src={process.env.PUBLIC_URL + "/facebook.png"}
            alt="facebook"
            className={navBarClass.navSocialSize}
          />
          <img
            src={process.env.PUBLIC_URL + "/linkedin.png"}
            alt="linkedin"
            className={navBarClass.navSocialSize}
          />
          <img
            src={process.env.PUBLIC_URL + "/instagram.png"}
            alt="instagram"
            className={navBarClass.navSocialSize}
          />
        </div>
      </div>

      <div className={navBarClass.section2}>
        <ul>
          {pages.map((page, index) => {
            return (
              <li key={index}>
                <Link to={`/${index === 0 ? "" : page}`}>{page}</Link>
              </li>
            );
          })}
        </ul>
        <div className={navBarClass.containSearch}>
          <div className={navBarClass.searchIconBkg}>
            <img
              src={process.env.PUBLIC_URL + "/searchIcon.png"}
              alt="searchIcon"
              className={navBarClass.navSearchIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
