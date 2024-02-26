'use client'

import { useEffect, useState } from "react"

export default function Page(){
  const [txt, setTxt] = useState('')
  const [json, setJson] = useState('')
  const [array, setArray] = useState([['']])
  const regEx = /[ ]/mg

  // useEffect(()=>{
  //   let transform = txt.replace(regEx, ';') 

  //   setJson(transform)
  // }, [txt])

  function run(){
    let convertedJson = arrayToJson(textToArray(txt),[])
    console.log(convertedJson)
    setJson('')
  }

  return (
    <>
      <div className='ml-10'>
        <div className='font-semibold'>TXT to JSON Converter</div>
        <div className='text-sm'>
        Using js functions from: <a href="https://github.com/fraigo/text-to-json" className="text-blue-500 font-medium"> Github/fraigo</a> 
        </div>
      </div>
      <hr className='my-4'/>

      
      <textarea name="txt" id="inputTxt" value={txt} onChange={e => setTxt(e.target.value)} placeholder="Insert your text here" rows={10}
        className="w-full overflow-y-auto p-3 border shadow-sm border-slate-500 focus:outline-none focus:border-green-500 focus:ring-green-500 rounded-md text-xs focus:ring-1"
      ></textarea>
      {/* <div className="select-all text-xs whitespace-pre-wrap border border-slate-500 rounded-md p-3 mt-2 min-h-40">
        {json}
      </div> */}
      
      <div className="grid justify-items-end">
        <button onClick={run} className='rounded bg-yellow-600 text-white py-4 px-8 mt-5' >Run</button>
      </div>
      <div className="text-xs whitespace-pre-wrap border border-slate-500 rounded-md p-3 mt-2 min-h-40">
        {json}
      </div>
    </>
  )

}

function getSeparator(line: string){
  
  let sep=[
    {sep:",",cols:line.split(",")},
    {sep:";",cols:line.split(";")},
    {sep:"\t",cols:line.split("\t")},
    {sep:"|",cols:line.split("|")},
  ]

  sep.sort(function(a,b){ 
    if (b.cols.length>a.cols.length) return 1;
    if (b.cols.length<a.cols.length) return -1;
    return 0;
  });

  return sep[0].sep; 
}


function textToArray(string: string ){
	
  let lines = string.split("\n");
  let sep = getSeparator(lines[0]);
  let result = [];
    
  for(let index in lines){
    lines[index] = lines[index].trim();
    let cols = lines[index].split(sep);

    console.log(cols)
    if(cols.length > 0){
      
      if(cols[0] == ""){
        console.log('aqui')
        for(var col in cols){
          if(cols[col] != ""){
            result[result.length-1][col]+="\n"+cols[col];
          }
        }
      }else{
        result.push(cols);
      }
    }
  }
  
  return result;
}

function arrayToJson(array:any , header:any){
  
  let tmp = array.concat([]);

  if (!header){
    header = tmp.shift();
  }

  let result = [];
  for(let index in tmp){
    let row:any = {};
    for(let col in header){
      let colname=header[col];
      let colvalue=tmp[index][col];
      
      for(let key in header){
        let header1=header[key];
        if (colvalue){
          colvalue=colvalue.replace("${"+header1+"}",tmp[index][key]);
        }
                
            }
      if (colvalue=='#row'){
        colvalue = parseInt(index)*1;
      }
      
      if (colvalue && colvalue.length && colvalue.indexOf('#row+')==0){
        let parts=colvalue.split('+');
        colvalue=parseInt(index)*1+parts[1]*1;
      }
      if (colname && colname.indexOf('#')==0){
        colvalue*=1;
        colname=colname.substring(1);
      }
      row[colname]=colvalue;
    }
    result.push(row);
  }
  return result;
}
