import Header from "../components/curriculum-vitae/header"
import SignLine from "../components/curriculum-vitae/signLine"

export default function Page(){
  
  return(
    
    <div className="text-slate-700">
    
    {/* header */}
    <Header/>
    
    {/* margins */}
    <div className="mx-1 md:mx-14 text-pretty">

      {/* About me */}
      <div>
        <h2 className="text-md font-bold tracking-wider">ABOUT ME</h2>
        <div className="flex-auto text-md font-normal">
          <p className="mb-1">DOB: 01/02/1995</p>
          <p>Motivated Software Developer with 3 years of hands-on experience.</p>
          <p>Seeking new career opportunities in the field.</p>
          <p>Currently residing in Queenstown-NZ.</p>
          <p>I bring a strong background in software development coupled with a passion for innovation.</p>
          
          <p className="font-semibold mt-1">Visa Status: Work Visa</p>
        </div>
      </div>

      {/* Qualification */}
      <div className="mt-8">
        <h2 className="text-md font-bold tracking-wider">EDUCATION AND QUALIFICATION</h2>
        <div className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam laboriosam reiciendis assumenda optio alias minus necessitatibus deleniti debitis excepturi labore delectus, nesciunt eveniet dignissimos sint ratione dolor sit. Aspernatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam laboriosam reiciendis assumenda optio alias minus necessitatibus deleniti debitis excepturi labore delectus, nesciunt eveniet dignissimos sint ratione dolor sit. Aspernatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam laboriosam reiciendis assumenda optio alias minus necessitatibus deleniti debitis excepturi labore delectus, nesciunt eveniet dignissimos sint ratione dolor sit. Aspernatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam laboriosam reiciendis assumenda optio alias minus necessitatibus deleniti debitis excepturi labore delectus, nesciunt eveniet dignissimos sint ratione dolor sit. Aspernatur.
        </div>
      </div>

      {/* Experience */}
      <div className="mt-8">
        <h2 className="text-md font-bold tracking-wider">EXPERIENCE</h2>
        <div className="text-md">
        I worked on the fiscal project, collaborating with a small team to develop an automated tool for calculating and analyzing Brazilian System taxes. 
          <br/>Our main challenge from the {'project\'s'} inception was addressing the data generation time for analysis, considering that our primary clients were 
          <br/>Financial Institutions with billions of records to be processed annually. 
          <br/>Our solution involved focusing on delivering with highly complex yet simple algorithms to optimize every possible fraction of a second.
          <br/>We implemented processes in parallelism wherever feasible.
        </div>
      </div>

      {/* footer */}
      <SignLine/>     
    </div>
    </div>
  )
}