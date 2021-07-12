import { createContext, useContext, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const Ctx = createContext();

function CoursesProvider({ children }) {
  const currentSegmentNumber = useRef([]);
  const maxWeek = 15;
  function randomProgress(max, min = 0) {
    let difference = max + 1 - min;
    let random = Math.floor(Math.random() * difference);
    return random + min;
  }
  const header =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.";
  const header2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.";
  const randomVideos = [
    {
      videoLink:
        process.env.PUBLIC_URL +
        "/GitHub - Create Local Repository and push to github Push an existing repository to github.mp4",
      videoTitle: "Creating git repositories",
      notes: [
        { title: "Header", note: header },
        { title: "Header", note: header2 },
      ],
    },
    {
      videoLink: process.env.PUBLIC_URL + "/How to Create Twitter Account.mp4",
      videoTitle: "Creating a twitter account",
      notes: [
        { title: "Header", note: header },
        { title: "Header", note: header2 },
      ],
    },
    {
      videoLink: process.env.PUBLIC_URL + "/whatsapp.mp4",
      videoTitle: "Creating a whatsapp clone",
      notes: [
        { title: "Header", note: header },
        { title: "Header", note: header2 },
      ],
    },
  ];
  class activity {
    constructor() {
      this.status = randomProgress(100);
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

      this.totalActivities = randomProgress(100);
      this.activitiesCompleted = randomProgress(this.totalActivities);
      let percent = parseInt(
        (this.activitiesCompleted / this.totalActivities) * 100
      );
      this.amountCompleted = isNaN(percent) ? 0 : percent;

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
      this.currentUser = {
        username: "shot",
        avatar: process.env.PUBLIC_URL + "/avatar.png",
      };
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
  function getCourseById(id) {
    let index = 0;
    let index_2 = 0;
    for (let i of courses) {
      for (let j of i.courses) {
        if (j.courseID === id) {
          currentSegmentNumber.current = [index, index_2];
          return j;
        }
        index_2++;
      }
      index++;
      index_2 = 0;
    }
    return {};
  }

  const values = {
    initializeCourseData,
    getCourses,
    isEmpty,
    getCourseById,
  };
  return <Ctx.Provider value={values}>{children}</Ctx.Provider>;
}
export default CoursesProvider;

export function useCoursesContext() {
  return useContext(Ctx);
}
