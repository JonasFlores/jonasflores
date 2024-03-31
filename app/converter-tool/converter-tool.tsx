'use client'

import { SyntheticEvent, useEffect, useState } from "react"

export default function ConvertTool(){
  let example = ( `example  description\n#1  Your text is being converted\n#2  Feel free to build your own objects`) 

  const [editableTxt, setEditableTxt] = useState<string>(example)
  const [generatedCSV, setGeneratedCSV] = useState<string[]>([])
  const [generatedJson, setGeneratedJson] = useState<{}[]>([])
  const [separator_Custom, setSeparator_Custom] = useState<string>(' ')
  const [separatorX_Custom, setSeparatorX_Custom] = useState<number>(2)
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
  useEffect(()=>{ setGeneratedCSV(CsvGeneratorRealTime(editableTxt)) }, [editableTxt, separator_Custom, separatorX_Custom])

  function CsvGeneratorRealTime(text: string): string[]{
    let output: string[] = []
    
    if(text.trim().length == 0){
      return output
    }

    text = text.trimStart()

    const regExSpaces = new RegExp('['+ separator_Custom + ']{'+ separatorX_Custom +',}', 'mg') // /[ ]{2,}/
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
        <div className='font-semibold'>TXT Converter | CSV & JSON</div>
        <div className='text-sm'>
          Check the code to see how I develop the tool using: js functions and events.
        </div>
        <hr className='my-4'/>
      </div>

      <div className="flex flex-col px-2">

        <div className="flex flex-row mt-2 gap-2">

          <div className="basis-1/2">
              <h3 className="font-medium px-2 text-slate-600">Editable TXT</h3>

            <textarea name="txt" id="inputTxt" 
              value={editableTxt} 
              onChange={(event: SyntheticEvent & {target : HTMLTextAreaElement}) => onChangeEditableTxt(event)} 
              placeholder="Insert your text here"
              className="w-full overflow-auto p-2 border shadow-sm border-green-400 focus:outline-none rounded-md h-48  text-xs sm:text-sm"
            ></textarea>
          </div>

          <div className="basis-1/2 overflow-auto">
            <h3 className="font-medium px-2 text-slate-600">CSV</h3>
            <div>
              <div className="select-all p-2 shadow-sm text-slate-800 overflow-auto border border-slate-300 rounded-md h-48 text-xs sm:text-sm">
                {generatedCSV?.map((line, i) => { return (<p key={i}>{line + ';'}</p>)})}
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-row gap-2 font-medium text-xs text-orange-600 bg-yellow-100 p-1">
              <div className="basis-6/12">
                *To define columns, use at least two spaces
              </div>
              <div className="basis-6/12">
                <span>
                  Separator:
                  <input className="w-5 mx-1 bg-white text-center border outline-none focus:border-orange-700" onChange={(e) => setSeparator_Custom(e.target.value)} value={separator_Custom} type="text" name="separator_Custom" id="separator_Custom" />

                </span>
                <span className="mx-2">
                  Times:
                  <input className="w-5 mx-1 bg-white text-center text-black border outline-none focus:border-orange-700" onChange={(e) => setSeparatorX_Custom(parseInt(e.target.value) || 0)} value={separatorX_Custom} type="text" name="separatorX_Custom" id="separatorX_Custom" />

                </span>
              </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium px-2 text-slate-600">JSON</h3>
          <div className="whitespace-pre-wrap select-all basis-auto text-xs border border-slate-300 shadow-sm rounded-md overflow-auto max-h-52 min-h-10 p-2 text-slate-800">
                {JSON.stringify(generatedJson, null, ' ')}
          </div>
        </div>
      </div>
        
    </>
  )
}