'use client'

import { ReactNode, useState } from "react"
import clsx from "clsx"

export function ShowTextWrapped({children}: {children: ReactNode}){
  let [view, setView ] = useState(false)

  if(children == undefined || children == ""){
     return <></>;  
  }

  return (
    <>
    <div className="text-xs text-gray-600 text-right">

      <div className={clsx("flex flex-row-reverse",{"hidden": view })} onClick={()=>{setView(!view)}}> 
        <a className="basis-6/12 line-clamp-1 text-blue-500 cursor-pointer"> Activites description... </a>
      </div>

      <p className={clsx({"hidden": !view })} >{children}</p>
      <a onClick={()=>{setView(!view)}} className={clsx("text-blue-500 cursor-pointer",{"hidden": !view })}>show less!</a>
    </div>
    </>
  )
}