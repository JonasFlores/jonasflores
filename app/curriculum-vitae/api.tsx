import { TableCVStrutucture } from "./types";

export const experienceData: TableCVStrutucture[] = [
  {
    Title: "EXPERIENCE",
    key: 1,

    col1:{
      line1:  "2022"
    },
    col2: {
      line1: "Patagonia Chocolates",
      line2: "Kitchen Hand",
    },
    col3: {
      line1: "Ice Cream Maker",
      line2: "Since July 2022"
    }
  
  },
  {
    Title: "EXPERIENCE",
    key: 2,

    col1:{
      line1:  "2019"
    },
    col2: {
      line1: "Sispro | Brazil",
    },
    col3: {
      line1: "Software Developer",
      line2: "Jan 2019 - Feb 2021",
      line3: "www.sispro.com.br"
    },
    rowHide: "I worked on the fiscal project, collaborating with a small team to develop an automated tool for calculating and analyzing Brazilian System taxes. Our main challenge from the {'project\'s'} inception was addressing the data generation time for analysis, considering that our primary clients were Financial Institutions with billions of records to be processed annually. Our solution involved focusing on delivering with highly complex yet simple algorithms to optimize every possible fraction of a second. We implemented processes in parallelism wherever feasible."
  },
  {
    Title: "EXPERIENCE",
    key: 3,

    col1:{
      line1:  "2011"
    },
    col2: {
      line1:  "Bom Sucesso | Brazil",
      line2:  "Building Supplies",
    },
    col3: {
      line1: "Transport and Storage",
      line2: "Jun 2011 - Dec 2018",
    },
    rowHide: ""
    //rowHide: "Delivery, storage, purchase and sale, carpentry assistant in the companys construction."
  },
]

export const qualificationData: TableCVStrutucture[] = [
  {
    Title: "EDUCATION E QUALIFICATION",
    key: 1,

    col1:{
      line1:  "2023"
    },
    col2: {
      line1: "Alura",
    },
    col3: {
      line1: "Web Development",
      line2: "Specialization studies"
    },
    rowHide:"React, Typescript, ChatGPT, Docker, Next JS, React Native, WebPack"
  },
  {
    Title: "EDUCATION E QUALIFICATION",
    key: 2,

    col1:{
      line1:  "2017"
    },
    col2: {
      line1: "Unilasalle | Brazil",
    },
    col3: {
      line1: "Computer Science",
       line2: "College on hold, third semester."
    }
  },
  
  {
    Title: "EDUCATION E UALIFICATION",
    key: 3,

    col1:{
      line1:  "2017"
    },
    col2: {
      line1: "QI | Brazil",
    },
    col3: {
      line1: "English Course",
    },
  },
  {
    Title: "EDUCATION E QUALIFICATION",
    key: 4,
    
    col1:{
      line1:  "2015"
    },
    col2: {
      line1: "QI | Brazil",
    },
    col3: {
      line1:  "Computer Technician"
    },
  },
]

export const skillsData: {
  skill: string,
  important?: boolean
}[] = [
  {skill: "SQL", important: true},
  {skill: "React", important: true},
  {skill: "TypeScript", important: true},
  {skill: "JavaScript", important: true},
  {skill: "Linux", important: true},
  {skill: "Git", important: true},
  {skill: "Docker", important: true},
  {skill: "Outsystems", important: true},
  {skill: "PHP", important: false},
  {skill: "Java", important: false},
  {skill: "Tailwind CSS", important: false},
  {skill: "Excel", important: false},
  {skill: "AppSheets", important: false},
  {skill: "Vue", important: false},
  {skill: "Windows", important: false},
  {skill: "Node", important: false},
  {skill: "Bootstrap", important: false},
  {skill: "AWS", important: false},
  {skill: "Jasper Reports", important: false},
]