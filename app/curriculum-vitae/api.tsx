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
      line2: "Pastry Chef",
    },
    col3: {
      line1: "Ice Cream Maker",
      line2: "July 2022 - May 2025"
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
    rowHide: "I worked on the development of the ECF fiscal product from its conception to maturity. I was responsible for automating the validation and resolution process of ECF formulas and enabling the creation of new formulas through customized account structures. I started on the project by developing the first CRUD operations and query screens for tax calculations, and over time, I took on responsibility for the backend. I worked closely with the business analyst, collaborating in the design of solutions. The project, primarily aimed at financial institutions, required high performance in processing large volumes of data, which led us to develop optimized algorithms and apply parallelism techniques to ensure performance."
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
    Title: "EDUCATION E QUALIFICATION",
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
