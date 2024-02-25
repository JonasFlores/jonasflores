import { ShowTextWrapped } from "../components/text"
import { TableCVStrutucture } from "./types";

export function TableCV({data}:{data: TableCVStrutucture[]}){
  return (
    <>

    <TitleSectionCV title={data[0].Title} />
    
    {data.map((section) =>{
      return ( 
        <div key={section.key} className="my-1 text-sm text-pretty border-b border-gray-200">
          <div className="flex flex-row">
            <div className="basis-1/12">{section.col1.line1}</div>
            
            <div className="basis-5/12 text-right">
              <div className="font-normal italic">{section.col2.line1}</div>
              <div className="font-light">{section.col2.line2}</div>        
            </div>
            
            <div className="basis-6/12 text-right mb-1">
              <div className="font-medium">{section.col3.line1}</div>
              <div className="font-light">{section.col3.line2}</div>
              <div className="font-light text-xs">{section.col3.line3}</div>
            </div>
          </div>
          
          <ShowTextWrapped>
            {section.rowHide}
          </ShowTextWrapped>

        </div>
      )
    })}
    </>
  )
}

export function TitleSectionCV ({title}: {title: string}){
  return (
    <>
      <h2 className="font-bold tracking-wider mb-2">{title.toUpperCase()}</h2>
    </>
  )
}