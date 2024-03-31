'use client'

import clsx from 'clsx';
import { TableFilter } from './components';
import { tableIrdPaye } from '@/data/table_IRD_PAYE';
import { useState } from 'react';
import Pagination from '../components/ui/table/pagination';

export default function Page(){
  
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(150)
  const tableRecords = () => tableIrdPaye


  return(
    <>
    {/* <TableFilter 
      search={search}
      setSearch={setSearch}
    /> */}
    <Pagination page={page} rowsPerPage={rowsPerPage} total={tableRecords().length} setPage={setPage} />
    <table className='mt-3 table-auto border-collapse border border-slate-400 w-full text-center'>
      <caption className="caption-top border-t border-x border-slate-300 py-4 bg-slate-100 text-slate-500 font-medium">
        Weekly and fortnightly PAYE deduction tables | IR340 | September 2023 
      </caption>
      <thead>
        <tr className='bg-slate-200 text-slate-700'>
          <th className='border border-slate-300 p-1'>{Object.keys(tableRecords()[0])[0]}</th>
          <th className='border border-slate-300 p-1'>{Object.keys(tableRecords()[0])[1]}</th>
          <th className='border border-slate-300 p-1'>Net Pay</th>
        </tr>
      </thead>
      <tbody>
        
        {tableRecords().slice((page-1)*rowsPerPage, rowsPerPage*page).map((line, index)=> {
          
          let col1 = parseFloat(line.gross_pay)
          let col2 = parseFloat(line.M?line.M:"0")
          let netPay = col1 - col2

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
    </>
  )
}

