import clsx from "clsx"
import { Fragment } from "react"

export interface PaginationProps{
  rowsPerPage: number,
  page: number,
  total: number,
  setPage: (value: number) => void
  isLimit?: boolean
}

export default function Pagination(props:PaginationProps){

  const pagesAmount = Math.trunc(props.total/props.rowsPerPage)
  const isLimit = ((props.page * props.rowsPerPage) + props.rowsPerPage) > props.total


  const recordsInformation = () => {
    
    let output = 'No records to show...'
    
    if(props.total > 0){
      let until = isLimit ? props.total : ((props.page)*props.rowsPerPage)
      output = "Showing " + ((props.page-1)*props.rowsPerPage+1) + " to " + until + " of " + props.total + " records"
    }

    return output
  
  }


  return (
  <>
    <div className="w-full flex flex-row gap-1 text-sm">
      <div className="sm:basis-4/12 basis-7/12 self-center italic px-2 text-xs"> { recordsInformation() } </div>
      
      <div className="w-6/12">
        <div className="overflow-x-auto">
          <nav className="sm:basis-4/12 sm:block sm:self-center hidden">
            <ul className="flex flex-nowrap justify-center">  
                      
              {[...Array(pagesAmount)].map((_,i)=> { 
                return (
                  <Fragment key={i}>
                    <li 
                      className={clsx("rounded-md w-9 p-2 text-white mr-1 text-center",
                        {"bg-slate-500 cursor-default": i+1 == props.page},
                        {"bg-slate-800 hover:bg-slate-600 cursor-pointer": i+1 !== props.page},
                      )}
                      onClick={() => props.setPage(i+1)}
                    >{i+1}
                    </li>
                  </Fragment>
                )})}          
            </ul>  
          </nav>
        </div>
      </div>
      <div className="sm:basis-4/12 basis-5/12 flex justify-end">
        <Navigation isLimit={isLimit} page={props.page} rowsPerPage={props.rowsPerPage} setPage={props.setPage} total={props.total}></Navigation>
      </div>
    </div>
  </>
  )
}

function Navigation(props:PaginationProps){
  return(
    <>
      <button
          className="rounded-l-lg py-2 px-3 bg-slate-500 text-white enabled:hover:bg-slate-800 w-16 text-xs text-center mr-px disabled:text-slate-300"
          onClick={() => props.setPage(props.page - 1)}
          disabled={props.page<=1 || props.total == 0}
        > Previous </button>
        <button 
          className="rounded-r-lg py-2 px-3 bg-slate-500 text-white enabled:hover:bg-slate-800 w-16 text-xs text-center disabled:text-slate-300"
          onClick={() => props.setPage(props.page + 1) }
          disabled={ props.isLimit || props.total == 0}
          > Next </button>
    </>
  )
}