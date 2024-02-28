import clsx from 'clsx';
import { TableFilter } from './components';
import { tableIrdPaye, tableIrdPayeTest } from '@/data/table_IRD_PAYE';


function txtToArray(txt: string){
  let data = txt.split('\n')
  let titles = data[0].split(' ')
  return {data, titles}
}

export default function Page(){
  
  let {data, titles} = txtToArray(tableIrdPayeTest)

  return(
    <>
    <TableFilter />
    <table className='table-auto border-collapse border border-slate-400 w-full text-center'>
      <caption className="caption-top border-t border-x border-slate-300 py-4 bg-slate-100 text-slate-500 font-medium">
        Weekly and fortnightly PAYE deduction tables | IR340 | September 2023 
      </caption>
      <thead>
        <tr className='bg-slate-200 text-slate-700'>
          <th className='border border-slate-300 p-1'>{titles[0]}</th>
          <th className='border border-slate-300 p-1'>{titles[1]}</th>
          {/* <th className='border border-slate-300 p-1'>{titles[2]}</th> */}
          <th className='border border-slate-300 p-1'>Net Pay</th>
        </tr>
      </thead>
      <tbody>
        
        {data.map((line, index)=> {
          const cols = line.split(' ')
          let col1 = parseFloat(cols[0])
          let col2 = parseFloat(cols[1])
          let col3 = cols[2]
          let netPay = col1 - col2

          if(index == 0){return}
          
          return (
            
            <tr key={line} className={clsx({"bg-slate-100" : index % 2 == 0})}>
                <td className='border border-slate-300 p-1'>{col1}.00</td>
                <td className='border border-slate-300 p-1'>{col2}</td>
                {/* <td className='border border-slate-300 p-1'>{col3}</td> */}
                <td className='border border-slate-300 p-1'>{netPay.toFixed(2)}</td>
            </tr>
          
          )
      })}
      </tbody>
    </table>


    
    </>
  )
}

