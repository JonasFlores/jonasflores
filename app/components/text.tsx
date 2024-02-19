'use client'

import { ReactNode, useState } from "react"
import clsx from "clsx"

export function ShowTextWrapped({children}: {children: ReactNode}){
  let [view, setView ] = useState(false)
  return (
    <>
    <div className="text-xs text-gray-600 my-1 text-right">

      <div className={clsx("flex flex-row-reverse",{"hidden": view })} onClick={()=>{setView(!view)}}> 
        <div className="basis-6/12 line-clamp-1 text-blue-500"> Activites description... </div>
      </div>

      <p className={clsx({"hidden": !view })} >{children}</p>
      <p onClick={()=>{setView(!view)}} className={clsx("text-blue-500",{"hidden": !view })}>show less!</p>
    </div>
    </>
  )
}