'use client'

import { useState } from "react"

export function TableFilter({search, setSearch}: {search: string, setSearch: (value:string) => void }){ 
  
  return(
    <>
    <label className="block mb-5">
      <span className="after:content-[' \o/'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        Search
      </span>
      <input 
        type="text" 
        name="search" 
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
        placeholder="Search test"
        onChange={event => setSearch(event.target.value)}
        value={search}
        />
    </label>
    </>
  )
}