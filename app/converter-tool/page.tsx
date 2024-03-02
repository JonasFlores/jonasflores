'use client'

import { SyntheticEvent, useEffect, useState } from "react"

export default function Page(){
  
  const [editableTxt, setEditableTxt] = useState('')
  const [generatedCSV, setGeneratedCSV] = useState('')
  
  //on_EditableTxtInput_Change
  function onChangeEditableTxt(event: SyntheticEvent & {target : HTMLTextAreaElement}){
    setEditableTxt(event.target.value)
  }
  
  //EditableTXT_Changes_Listener
  useEffect(()=>{ setGeneratedCSV(CsvGeneratorRealTime(editableTxt)) }, [editableTxt])
  

  function CsvGeneratorRealTime(text: string): string{
    
    const regExSpaces = /[ ]/mg
    const regExNewLines = /[\r\n]/mg
    
    text = text.replace(regExSpaces, ';')
    text = text.replace(regExNewLines, ';\r\n')

    return text
  
  }

  function CheckGeneratedCSV(csv: string): { isValid: boolean, errorMessage: string }{
    let isValid = false
    let errorMessage = ''

    if(csv.length == 0){
      isValid = false
      errorMessage = 'The CSV is empty'
    }else{
      errorMessage = 'no implemented'
    }
    
    return {isValid: isValid, errorMessage: errorMessage}
  }

  function FixGeneratedCSV_OnBlur(): void {
    
    let { isValid, errorMessage } = CheckGeneratedCSV(generatedCSV)

    console.log(errorMessage)
    
    if(!isValid){
      setGeneratedCSV(generatedCSV + ';')
    }
    
  }

  return (
    <>
      <div className='mx-10 text-slate-800'>
        <div className='font-semibold'>TXT to JSON Converter</div>
        <div className='text-sm'>
          Check the code to see how I develop the tool using: js functions and events.
        </div>
        <hr className='my-4'/>
      </div>

      <div className="mt-2 px-2 ">
        <h3 className="font-medium px-2 text-slate-600">Editable TXT</h3>

        <textarea name="txt" id="inputTxt" 
          value={editableTxt} 
          onChange={(event: SyntheticEvent & {target : HTMLTextAreaElement}) => onChangeEditableTxt(event)} 
          onBlur={(event: SyntheticEvent) => FixGeneratedCSV_OnBlur()} 
          placeholder="Insert your text here"
          rows={5}
          className="w-full overflow-y-auto p-2 border shadow-lg border-slate-500 focus:outline-none rounded-md"
        ></textarea>
      </div>

      <div className="mt-2 px-2">
        <h3 className="font-medium px-2 text-slate-600">Result</h3>
        <div className="whitespace-pre-wrap select-all border border-slate-500 rounded-md p-2 min-h-28 shadow-lg ">
          {generatedCSV}
        </div>
      </div>      
      
      <div className="grid justify-items-end">
        <button className='rounded bg-yellow-600 text-white py-4 px-8 mt-5' >Run</button>
      </div>
        
    </>
  )

}
