import { ShowTextWrapped } from "../components/text"

export type ExperienceStrutucture = {
  firstCol: string,
  secondCol: {
    firstLine: string,
    secondLine?: string
  },
  thirdCol: {
    firstLine: string,
    secondLine?: string,
    thirdLine?: string
  },
  textToWrap: string
}

export function Experience({data}:{data: ExperienceStrutucture[]}){
  return (
    <>
    <h2 className="font-bold tracking-wider mb-2">EXPERIENCE</h2>
    {data.map((experience) =>{
      return ( <>

        <div className="my-1 text-sm text-pretty border-b border-gray-200">
          <div className="flex flex-row">
            <div className="basis-1/12">{experience.firstCol}</div>
            
            <div className="basis-5/12 text-right">
              <div className="font-medium">{experience.secondCol.firstLine}</div>
              <div className="font-light">{experience.secondCol.secondLine}</div>        
            </div>
            
            <div className="basis-6/12 text-right">
              <div className="font-medium">{experience.thirdCol.firstLine}</div>
              <div className="font-light">{experience.thirdCol.secondLine}</div>
              <div className="font-light text-xs">{experience.thirdCol.thirdLine}</div>
            </div>
          </div>

          <ShowTextWrapped>
            {experience.textToWrap}
          </ShowTextWrapped>

        </div>
      </> )
    })}
    </>
  )
}