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
          <p>DOB: 01/02/1995</p>
          <p>Motivated Software Developer with 3 years of hands-on experience.</p>
          <p>Seeking new career opportunities in the field.</p>
          <p>Currently residing in Queenstown-NZ.</p>
          <p>I bring a strong background in software development coupled with a passion for innovation.</p>
          <p className="font-medium mt-1">Visa Status: Work Visa</p>
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
             <div className={clsx("basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5", {"font-medium" : item.important})}> 
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