import { createContext, useContext, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

class teammember {
  constructor(firstName, lastName, role, imageUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.imageUrl = imageUrl;
  }
}
class emptyStartUp {
  constructor() {
    this.image = process.env.PUBLIC_URL + "/startupIcon.png";
    this.startupName = "Mangoswap";
    this.fundRaised = 200000;
    this.totalFund = 400000;
  }
}
const Ctx = createContext();
function DataProvider({ children }) {
  const fetchAmount = useRef(12);
  const [dataStorage, updateDataStorage] = useState([]);
  const createStartup = () => {
    return {
      ...new emptyStartUp(),
      description:
        "The mango swap coin is the future for crypto currency, it will allow user share and transact over defi networks with less fees.",
      creationDate: "17th May, 2015",
      website: "mangoswap.com",
      social: {
        twitter: "",
        linkedin: "",
        facebook: "",
      },
      location: "San Francisco, California",
      teamSize: {
        min: 100,
        max: 500,
      },
      team: [
        new teammember("Edmund", "Kitan", "Founder", ""),
        new teammember("Olarenwaju", "Cesar", "Co-Founder", ""),
        new teammember("Uzo", "Amanda", "Head of Growth", ""),
        new teammember("Donald", "Duke", "Head of Product", ""),
      ],
      tags: ["Crypto", "Exchanges", "NFT", "Blockchain"],
      aboutCompany:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      vision:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation v",
      relatedStartUps: [
        new emptyStartUp(),
        new emptyStartUp(),
        new emptyStartUp(),
        new emptyStartUp(),
      ],
      userID: uuidv4(),
    };
  };

  const generateXStartUps = ({ minimum = 4, fixedAmt }) => {
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
  };
  const initializeDataStorage = () => {
    updateDataStorage([
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
    ]);
  };
  const isDataEmpty = () => {
    return dataStorage.length === 0 ? true : false;
  };
  const getFetchAmount = () => {
    return fetchAmount.current;
  };
  const setFetchAmount = (newFetchAmount) => {
    fetchAmount.current = newFetchAmount;
  };
  const getDataFromStorage = () => {
    return dataStorage;
  };
  const renderMoreStartups = (index) => {
    const data = [];
    for (let i = 0; i < fetchAmount.current; i++) {
      data.push(createStartup());
    }
    updateDataStorage((prev) => {
      const updatedAllStartup = [...prev[index].allStartUps, ...data];
      const updatedStorage = [...prev];
      updatedStorage[index].allStartUps = updatedAllStartup;
      return updatedStorage;
    });
  };

  const queryId = (userID) => {
    // for (let i = 0)
    for (let i of dataStorage) {
      for (let j of i.allStartUps) {
        if (j.userID === userID) {
          return j;
        }
      }
    }
    return {};
  };
  const values = {
    queryId,
    initializeDataStorage,
    isDataEmpty,
    getFetchAmount,
    setFetchAmount,
    getDataFromStorage,
    renderMoreStartups,
  };
  return <Ctx.Provider value={values}>{children}</Ctx.Provider>;
}
export default DataProvider;

export function useDataContext() {
  return useContext(Ctx);
}
