import Header from "../components/curriculum-vitae/header"
import SignLine from "../components/curriculum-vitae/signLine"
import { TableCV, TitleSectionCV } from "./components"
import { experienceData, qualificationData, skillsData } from "./api"
import clsx from "clsx"

export default function Page(){
  
  return(
    
    <div className="text-slate-700">
    
    {/* header */}
    <Header/>
    
    {/* margins */}
    <div className="mx-1 md:mx-14 text-pretty">

      {/* About me */}
      <div className="text-md">
        
        <TitleSectionCV title="about me" />
    
        <div className="text-sm">
          <p>I'm a software developer with two and a half years of experience working on the Fiscal (ECF) product and a strong interest in continuous learning. I'm always looking to improve my skills through online courses and hands-on projects.</p>
          <p>I lived in New Zealand for three years with the goal of improving my English, fulfilling my dream of living abroad, and achieving personal and financial goals. Now back in Brazil, I'm motivated to resume my career in technology, bringing with me a wealth of cultural and professional experiences. I'm disciplined, proactive, and driven by curiosity and a desire to learn, always seeking creative solutions to the challenges I face.</p>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-8 text-md">
        <TableCV data={experienceData}/>
      </div>


      {/* Qualification */}
      <div className="mt-8 text-md">
        <TableCV data={qualificationData}/>
      </div>

      {/* Skills */}
      <div className="mt-8 text-md">

        <TitleSectionCV title="skills" />

        <div className="flex flex-wrap text-sm ">
        
        {skillsData.map((item) => {
          return (
             <div key={item.skill} className={clsx("basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5", {"font-medium" : item.important})}> 
              {item.skill} </div>
             )
            })}
        </div>


      </div>


      {/* footer */}
      <SignLine/>     
    </div>
    </div>
  )
}
