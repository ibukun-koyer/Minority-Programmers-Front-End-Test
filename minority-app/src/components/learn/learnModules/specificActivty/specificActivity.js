import classes from "./specificActivity.module.css";
import TemplateCard from "../../learnPageTemplates/TemplateCard";
import TemplateContainer from "../../learnPageTemplates/TemplateContainer";
import TemplateSectionOne from "../../learnPageTemplates/TemplateSectionOne";
import TemplateSectionTwo from "../../learnPageTemplates/TemplateSectionTwo";
import { useParams } from "react-router";
import ImplementPathArray from "../../helperFiles/implementPathArray/implementPathArray";
import TextLink from "../../helperFiles/TextLink/TextLink";
import { Fragment, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const tag = "activity";
function SpecificActivity({
  course,
  hideWeekActivities,
  setClickedNav,
  coursesStorage,
}) {
  const { weekid, activityid } = useParams();

  const videoRef = useRef();
  const videoContainer = useRef();
  const mediaBar = useRef();
  //initialize options
  const [showBigIcon, setShowBigIcon] = useState(true);
  const [showBottom, setShowBottom] = useState(false);
  const readTime = useRef();
  const [renderTime, setRenderTime] = useState("-- minutes");

  const [currentTime, setCurrentTime] = useState("00:00");
  const [showCompletion, setShowCompletion] = useState(false);
  function play() {
    videoRef.current.play();

    setShowBigIcon(false);
    setShowBottom(true);
  }
  function fullscreen() {
    if ($(videoRef.current).get(0).requestFullscreen) {
      $(videoRef.current).get(0).requestFullscreen();
    } else if ($(videoRef.current).get(0).mozRequestFullScreen) {
      // Version for Firefox
      $(videoRef.current).get(0).mozRequestFullScreen();
    } else if ($(videoRef.current).get(0).webkitRequestFullscreen) {
      // Version for Chrome and Safari
      $(videoRef.current).get(0).webkitRequestFullscreen();
    }
  }
  function pause() {
    videoRef.current.pause();

    setShowBigIcon(true);
    setShowBottom(false);
  }
  function seek(e) {
    $(videoRef.current).get(0).currentTime =
      (e.nativeEvent.offsetX / $(mediaBar.current).parent().width()) *
      $(videoRef.current).get(0).duration;
  }

  function onLoadedMetadata() {
    setRenderTime(
      Math.floor($(videoRef.current).get(0).duration / 60) + " minutes"
    );
  }

  useEffect(() => {
    const video = videoRef.current;
    function ended() {
      pause();
      setShowCompletion(true);
    }
    $(video).on("ended", ended);
    return () => $(video).off("ended", ended);
  }, [activityid]);
  useEffect(() => {
    if (!showBigIcon) {
      const updateTime = () => {
        function secondsToTimeStr(sec) {
          let minute = Math.floor(sec / 60);
          let seconds = Math.floor(((sec % 60) * 60) / 100);

          let percentage = (sec / $(videoRef.current).get(0).duration) * 100;
          $(mediaBar.current).css({
            left: `${percentage}%`,
          });

          return `${minute.toString().padStart(2, 0)}:${seconds
            .toString()
            .padStart(2, 0)}`;
        }

        setCurrentTime(
          secondsToTimeStr(Math.floor($(videoRef.current).get(0).currentTime))
        );
      };
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [showBigIcon, activityid]);

  useEffect(() => {
    pause();
    setShowCompletion(false);
  }, [activityid]);
  useEffect(() => {
    const container = videoContainer.current;
    function mouseing(movement) {
      if (movement === "enter") {
        if (!showBigIcon && !showBottom) {
          setShowBottom(true);
        }
      } else if (movement === "leave") {
        if (!showBigIcon && showBottom) {
          setShowBottom(false);
        }
      }
    }

    function mouseIn() {
      mouseing("enter");
    }
    function mouseOut() {
      mouseing("leave");
    }
    $(container).on("mouseenter", mouseIn);
    $(container).on("mouseleave", mouseOut);
    return () => {
      $(container).off("mouseenter", mouseIn);
      $(container).off("mouseleave", mouseOut);
    };
  }, [videoContainer, showBottom, showBigIcon, activityid]);

  let activity =
    course.modules.week[weekid - 1].activities.activity[activityid - 1];
  let length = course.modules.week[weekid - 1].activities.activity.length;
  return (
    <TemplateContainer
      hideWeekActivities={hideWeekActivities}
      setClickedNav={setClickedNav}
    >
      <TemplateSectionOne
        style={{
          height: "fit-content",
          overflow: "visible",
          display: "flex",
          justifyContent: "center",
        }}
        turnOffGradient
      >
        <div className={classes.controls} ref={videoContainer} key={activityid}>
          <video
            className={`${classes.video} `}
            ref={videoRef}
            onLoadedMetadata={onLoadedMetadata}
          >
            <source src={activity.document.videoLink} />
          </video>
          {showBigIcon ? (
            <div className={classes.playBtn} onClick={play}>
              <img
                src={process.env.PUBLIC_URL + "/playIcon.png"}
                alt="playIcon"
              />
            </div>
          ) : null}

          <div
            className={`${classes.controlBar} ${
              showBottom ? classes.showControls : classes.hideControls
            }`}
          >
            <i className="fa fa-pause" aria-hidden="true" onClick={pause}></i>
            <span className={classes.currentTime}>{currentTime}</span>
            <div className={classes.mediaBar} onClick={seek}>
              <div ref={mediaBar}></div>
            </div>
            <img src={process.env.PUBLIC_URL + "/speaker.png"} alt="speaker" />
            <img
              src={process.env.PUBLIC_URL + "/settings.png"}
              alt="settings"
            />
            <img
              src={process.env.PUBLIC_URL + "/fullScreen.png"}
              alt="fullScreen"
              onClick={fullscreen}
            />
          </div>
          {showCompletion ? (
            <div className={classes.completionCard}>
              <h1 className={classes.completionCardH1}>Activity completed</h1>
              <img
                src={process.env.PUBLIC_URL + "/completionImage.png"}
                alt="completion icon"
                className={classes.completionImage}
              />
              <div className={classes.amountCompleted}>90% complete</div>
              <div className={classes.activityCompleted}>
                You just completed
                <div>
                  Activity {activityid}: {activity.document.videoTitle}
                </div>
              </div>
              <Link
                to={
                  parseInt(activityid) + 1 <= length
                    ? `${tag}${parseInt(activityid) + 1}`
                    : `${tag}${parseInt(activityid)}`
                }
              >
                <button
                  onClick={() => {
                    setShowCompletion(false);
                  }}
                  className={classes.completionBtn}
                >
                  Go to Next Lesson
                </button>
              </Link>
              <div
                onClick={() => {
                  setShowCompletion(false);
                }}
                className={classes.completionCancel}
              >
                cancel
              </div>
            </div>
          ) : null}
        </div>
      </TemplateSectionOne>

      <TemplateSectionTwo
        style={{ paddingTop: 0, position: "relative", isolation: "isolate" }}
      >
        <ImplementPathArray id={activityid} tag={tag} max={length} />

        <TemplateCard progress={activity.status} className={classes.card}>
          <TextLink
            tag="Activity"
            index={activityid - 1}
            turnOffLink
            style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
          >
            {activity.document.videoTitle}
          </TextLink>
          <div className={classes.timer}>
            <i className="fa fa-clock-o" aria-hidden="true" ref={readTime}></i>{" "}
            {renderTime}
          </div>
          {activity.document.notes.map((note, index) => {
            return (
              <Fragment key={index}>
                <h1 className={classes.noteHeader}>{note.title}</h1>
                <p className={classes.noteParagraph}>{note.note}</p>
              </Fragment>
            );
          })}
        </TemplateCard>
      </TemplateSectionTwo>
    </TemplateContainer>
  );
}
export default SpecificActivity;
