import Header from "../components/curriculum-vitae/header"
import SignLine from "../components/curriculum-vitae/signLine"
import { Experience } from "./components"
import { experienceData } from "./api"

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
        <Experience data={experienceData}/>
      </div>


      {/* Qualification */}
      <div className="mt-8 text-md">
        <h2 className="font-bold tracking-wider">EDUCATION AND QUALIFICATION</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam laboriosam reiciendis assumenda optio alias minus necessitatibus deleniti debitis excepturi labore delectus, nesciunt eveniet dignissimos sint ratione dolor sit. Aspernatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam laboriosam reiciendis assumenda optio alias minus necessitatibus deleniti debitis excepturi labore delectus, nesciunt eveniet dignissimos sint ratione dolor sit. Aspernatur.
        </p>
      </div>


      {/* footer */}
      <SignLine/>     
    </div>
    </div>
  )
}