import { ShowTextWrapped } from "../components/text"

export type TableCVStrutucture = {
  
  Title: string,
  rowHide?: string,
  key: number,
  
  col1: {
    line1: string,
    line2?: string,
    line3?: string
  },
  col2: {
    line1: string,
    line2?: string
    line3?: string
  },
  col3: {
    line1: string,
    line2?: string,
    line3?: string
  },

}

export function TableCV({data}:{data: TableCVStrutucture[]}){
  return (
    <>
    <h2 className="font-bold tracking-wider mb-2">{data[0].Title}</h2>
    
    {data.map((section) =>{
      return ( <>

        <div key={section.key} className="my-1 text-sm text-pretty border-b border-gray-200">
          <div className="flex flex-row">
            <div className="basis-1/12">{section.col1.line1}</div>
            
            <div className="basis-5/12 text-right">
              <div className="font-medium italic">{section.col2.line1}</div>
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
      </> )
    })}
    </>
  )
}