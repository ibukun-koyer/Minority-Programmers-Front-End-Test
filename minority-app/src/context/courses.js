import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Ctx = createContext();

function CoursesProvider({ children }) {
  const maxWeek = 15;
  function randomProgress() {
    return Math.floor(Math.random() * 101);
  }
  const header =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.";
  const header2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.";
  const randomVideos = [
    {
      videoLink: "https://www.youtube.com/watch?v=I-k-iTUMQAY",
      videoTitle: "basics of CODING in 10 minutes",
      header,
      header2,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=N775KsWQVkw",
      videoTitle: "HOW TO PROGRAM - Getting Started!",
      header,
      header2,
    },
    {
      videoLink: "https://www.youtube.com/watch?v=RRubcjpTkks",
      videoTitle: "Learn Java in 14 Minutes (seriously)",
      header,
      header2,
    },
  ];
  class activity {
    constructor() {
      this.progress = randomProgress();
      this.document =
        randomVideos[Math.floor(Math.random() * randomVideos.length)];
    }
  }
  class activities {
    constructor() {
      let randomAmt = Math.floor(Math.random() * maxWeek) + 1;
      const activities = [];
      for (let i = 0; i < randomAmt; i++) {
        activities.push(new activity());
      }
      this.activity = activities;
    }
  }
  class week {
    constructor() {
      this.title = "Fundamentals of Cryptocurrency";
      this.amountCompleted = randomProgress();
      this.introductionCompleted = [true, true, false];
      this.activities = new activities();
    }
  }
  class module {
    constructor() {
      let randomAmt = Math.floor(Math.random() * maxWeek) + 1;
      const weeks = [];
      for (let i = 0; i < randomAmt; i++) {
        weeks.push(new week());
      }
      this.week = weeks;
    }
  }
  class exampleCourse {
    constructor() {
      this.courseName = "Intro to Blockchain";
      this.courseDescription = "Blockchain, Cryptocurrency Fundamentals";
      this.courseID = uuidv4();
      this.modulesCompleted = 8.3;
      this.totalModules = 10;
      this.currentUser = { username: "shot", avatar: "" };
      this.courseCompletion = 75;
      this.promotion = "Earn $30";
      this.modules = new module();
    }
  }
  class coursesSegment {
    constructor(segmentName) {
      this.segmentName = segmentName;
      let random = Math.floor(Math.random() * 20) + 1;
      if (random < 4) {
        random = 4;
      }
      const courses = [];
      for (let i = 0; i < random; i++) {
        courses.push(new exampleCourse());
      }
      this.courses = courses;
    }
  }
  const segmentNames = ["My courses", "Featured courses"];

  const [courses, storeCourses] = useState([]);
  function initializeCourseData() {
    let arrOfCourses = [];
    for (let i of segmentNames) {
      arrOfCourses.push(new coursesSegment(i));
    }
    storeCourses(arrOfCourses);
  }
  function getCourses() {
    return courses;
  }
  function isEmpty() {
    return courses.length === 0;
  }
  const values = {
    initializeCourseData,
    getCourses,
    isEmpty,
  };
  return <Ctx.Provider value={values}>{children}</Ctx.Provider>;
}
export default CoursesProvider;

export function useCoursesContext() {
  return useContext(Ctx);
}
