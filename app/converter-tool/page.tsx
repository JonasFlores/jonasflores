'use client'

import { SyntheticEvent, useEffect, useState } from "react"

export default function Page(){
  let example = ( `example  description\n#1  Your text is being converted\n#2  Feel free to build your own objects`) 

  const [editableTxt, setEditableTxt] = useState<string>(example)
  const [generatedCSV, setGeneratedCSV] = useState<string[]>([])
  const [generatedJson, setGeneratedJson] = useState<{}[]>([])
  const separator_CSV = ';'

  // TXT FUNCTIONS
  //SET_TXT > on_EditableTxtInput_Change
  function onChangeEditableTxt(event: SyntheticEvent & {target : HTMLTextAreaElement}){
    setEditableTxt(event.target.value)
  }
  
  // // JSON Functions
  // //SET_JSON > generatedCsv_Changes_Listener
  useEffect(()=>{ setGeneratedJson(JsonGeneratorRealTime(generatedCSV)) }, [generatedCSV])
  
  function JsonGeneratorRealTime(csv: string[]): {}[]{
    let output:{}[] = []
    let keys:string[] = []
    let values:string[] = []
    let keyValueList:[string, string][] = []

    let listElements = csv.slice()
    
    if(listElements.length == 0){return output}
    
    //headers
    listElements[0].split(separator_CSV).forEach((header, i)=>{ keys.push(header) })
    
    //remove headers from the list
    listElements.shift()
    
    listElements.forEach((line) => {
      //reset variables
      keyValueList = []
      values = []

      line.split(separator_CSV).forEach((value) => { values.push(value) })

      keys.forEach((key, index) =>{ keyValueList.push([key, values[index]]) })
      
      try {
        output.push(Object.fromEntries(keyValueList))
      } catch (error) {
        console.log(error)
      }
      
    })

    return output
  }

  // CSV Functions
  //SET_CSV > EditableTXT_Changes_Listener
  useEffect(()=>{ setGeneratedCSV(CsvGeneratorRealTime(editableTxt)) }, [editableTxt])

  function CsvGeneratorRealTime(text: string): string[]{
    let output: string[] = []
    
    if(text.trim().length == 0){
      return output
    }

    text = text.trimStart()

    const regExSpaces = /[ ]{2,}/mg
    const regExNewLines = /[\r\n]/mg
    
    text = text.replace(regExSpaces, separator_CSV)
    text = text.replace(regExNewLines, '\n')
    CsvToArray(text).forEach((element) => {
      output.push(element)
    })
    
    return output
  }

  function CsvToArray(csv: string): string[]{
    let output = csv.split('\n')
    if(output[output.length-1] == ''){ output.pop() }
    return output
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

      <div className="flex flex-col gap-3 px-2">

        <div className="flex flex-row mt-2 gap-2">

          <div className="basis-1/2">
            <div>
              <span className="font-medium px-2 text-slate-600">Editable TXT</span>
              <span className="font-normal text-xs text-orange-700">*To define columns, use at least two spaces</span>
            </div>

            <textarea name="txt" id="inputTxt" 
              value={editableTxt} 
              onChange={(event: SyntheticEvent & {target : HTMLTextAreaElement}) => onChangeEditableTxt(event)} 
              placeholder="Insert your text here"
              className="w-full overflow-y-auto p-2 border shadow-sm border-green-400 focus:outline-none rounded-md h-48"
            ></textarea>
          </div>

          <div className="basis-1/2 overflow-x-auto">
            <h3 className="font-medium px-2 text-slate-600">CSV</h3>
            <div>
              <div className="select-all p-2 shadow-sm text-slate-800 overflow-auto border border-slate-300 rounded-md h-48">
                {generatedCSV?.map((line, i) => { return (<p key={i}>{line + ';'}</p>)})}
              </div>
            </div>
          </div>

        </div>

        <div>
          <h3 className="font-medium px-2 text-slate-600">JSON</h3>
          <div className="whitespace-pre-wrap select-all basis-auto text-xs border border-slate-300 shadow-sm rounded-md overflow-y-auto max-h-52 min-h-10 p-2 text-slate-800">
                {JSON.stringify(generatedJson, null, ' ')}
          </div>
        </div>
      </div>
        
    </>
  )
}