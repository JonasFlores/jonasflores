'use client'

import clsx from 'clsx';
import { TableFilter } from './components';
import { tableIrdPaye } from '@/data/table_IRD_PAYE';
import { useEffect, useState } from 'react';

export default function Page(){
  
  const [search, setSearch] = useState<string>('')
  const [table_PaginationIndex, setTable_PaginationIndex] = useState<number>(0)
  const [table_RowsToPage, setTable_RowsToPage] = useState<number>(10)

  function changePagination(isForward:boolean): void{
    if(!isForward && table_PaginationIndex == 0){ return }
    isForward ? setTable_PaginationIndex(table_PaginationIndex + table_RowsToPage) : setTable_PaginationIndex(table_PaginationIndex - table_RowsToPage)
  }

  return(
    <>
    <TableFilter 
      search={search}
      setSearch={setSearch}
    />
    <table className='table-auto border-collapse border border-slate-400 w-full text-center'>
      <caption className="caption-top border-t border-x border-slate-300 py-4 bg-slate-100 text-slate-500 font-medium">
        Weekly and fortnightly PAYE deduction tables | IR340 | September 2023 
      </caption>
      <thead>
        <tr className='bg-slate-200 text-slate-700'>
          <th className='border border-slate-300 p-1'>{Object.keys(tableIrdPaye[0])[0]}</th>
          <th className='border border-slate-300 p-1'>{Object.keys(tableIrdPaye[0])[1]}</th>
          <th className='border border-slate-300 p-1'>Net Pay</th>
        </tr>
      </thead>
      <tbody>
        
        {tableIrdPaye.slice(table_PaginationIndex,table_PaginationIndex + table_RowsToPage).map((line, index)=> {
          let col1 = parseFloat(line.gross_pay)
          let col2 = parseFloat(line.M)
          let netPay = col1 - col2

          if(index == 0){return}
          
          return (
            
            <tr key={index} className={clsx({"bg-slate-100" : index % 2 == 0})}>
                <td className='border border-slate-300 p-1'>{col1}.00</td>
                <td className='border border-slate-300 p-1'>{col2}</td>
                <td className='border border-slate-300 p-1'>{netPay.toFixed(2)}</td>
            </tr>
          
          )
      })}
      </tbody>
    </table>
      <div className='bg-slate-300 w-full flex flex-row justify-end mt-2 text-center p-2 cursor-pointer rounded-lg select-none'>
        <div className='basis-1/3 hover:font-semibold'
          onClick={() => changePagination(false)}
          >Back</div>
        <div className='basis-1/3 text-xs p-1 text-slate-600'>{table_PaginationIndex} - {table_PaginationIndex+table_RowsToPage}</div>
        <div className='basis-1/3 hover:font-semibold'
          onClick={() => changePagination(true)}
          >Forward</div>
      </div>


    
    </>
  )
}

