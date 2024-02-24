import Header from "../components/curriculum-vitae/header"
import SignLine from "../components/curriculum-vitae/signLine"
import { TableCV } from "./components"
import { experienceData, qualificationData } from "./api"

export default function Page(){
  
  return(
    
    <div className="text-slate-700">
    
    {/* header */}
    <Header/>
    
    {/* margins */}
    <div className="mx-1 md:mx-14 text-pretty">

      {/* About me */}
      <div className="text-md">
        <h2 className="font-bold tracking-wider">ABOUT ME</h2>
        <div>
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


      {/* footer */}
      <SignLine/>     
    </div>
    </div>
  )
}