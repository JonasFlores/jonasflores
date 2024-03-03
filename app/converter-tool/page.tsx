'use client'

import { SyntheticEvent, useEffect, useState } from "react"

export default function Page(){
  
  const [editableTxt, setEditableTxt] = useState('')
  const [generatedCSV, setGeneratedCSV] = useState<string[]>()
  const [generatedJson, setGeneratedJson] = useState<{}[]>()
  const separator_CSV = ';'

  // TXT FUNCTIONS
  //SET_TXT > on_EditableTxtInput_Change
  function onChangeEditableTxt(event: SyntheticEvent & {target : HTMLTextAreaElement}){
    setEditableTxt(event.target.value)
  }
  
  // // JSON Functions
  // //SET_JSON > generatedCsv_Changes_Listener
  // useEffect(()=>{ setGeneratedJson(JsonGeneratorRealTime(generatedCSV)) }, [generatedCSV])
  
  // function JsonGeneratorRealTime(csv: {}[]): {}[]{
  //   let output:{}[] = []
  //   let keys:string[] = []
  //   let values:string[] = []
    
  //   let listElements = CsvToArray(csv)
    
  //   if(listElements.length == 0){return output}
    
  //   //headers
  //   listElements[0].split(separator_CSV).forEach((header, i, arr)=>{
  //     //ignore last ; (pseudo-element)
  //     if(i == arr.length - 1){return}
  //     keys.push(header)
  //   })
    
  //   //remove headers from the list
  //   listElements.splice(0,1)
    
  //   let keyValueList:[key:string, value:string][] = []
  //   let temp:[[a: string, b:string]]
  //   listElements.forEach((line) => {
      
  //     line.split(separator_CSV).forEach((value, i, arr) => {
  //       //ignore last ; (fake element)
  //       if(i == (arr.length - 1)){return}
  //       values.push(value)
  //     })

  //     values = []
  //   })

  //   return output
  // }

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
    
    console.log(output)
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
              //onBlur={(event: SyntheticEvent) => FixGeneratedCSV()} 
              //onMouseDown={(event: SyntheticEvent) => FixGeneratedCSV()} 
              placeholder="Insert your text here"
              rows={5}
              className="w-full overflow-y-auto p-2 border shadow-lg border-slate-500 focus:outline-none rounded-md"
            ></textarea>
          </div>

          <div className="basis-1/2 overflow-x-auto">
            <h3 className="font-medium px-2 text-slate-600">Generated CSV</h3>
            <div>
              <div className="select-all p-2 shadow-lg text-slate-800 overflow-x-auto border border-slate-500 rounded-md min-h-10">
                {generatedCSV?.map((line, i) => { return (<p key={i}>{line + ';'}</p>)})}
              </div>
            </div>
          </div>

        </div>

        <div>
          <h3 className="font-medium px-2 text-slate-600">JSON</h3>
          <div className="basis-auto bg-slate-100">
                {JSON.stringify(generatedJson)}
          </div>
        </div>
      </div>
        
    </>
  )

}

/*
                  CsvToArray(generatedCSV).map((line, i) => {
                    if(line == ''){ return }
                    if(i == 0){ return ( <span key={i}>{line}</span>) }
                    return <span key={i}><br/>{line}</span>
                    })
                  

 
  function CheckGeneratedCSV(csv: string, originTxt: string): { isValid: boolean, errorMessage: string, hasPossibilityFix: boolean, isEmpty: boolean }{
    let output = {isValid: false, errorMessage: 'Default error Message | Validation not Implemented', hasPossibilityFix: false, isEmpty: false} 

    if(csv.length == 0){
      output.errorMessage = 'CSV is empty'
      output.isEmpty = true
      return output
    }

    if((originTxt.trim().length == 0)){
      output.isValid = true
      return output
    }

    let lastChar = csv.trimEnd()[csv.trimEnd().length-1]

    if(lastChar == separator_CSV){
      output.isValid = true
      output.errorMessage = ''
      return output

    }else{

      output.errorMessage = 'The last `;` is missing'
      output.hasPossibilityFix = true
      return output
    }
      
    return output
  }

  function FixGeneratedCSV(): void {
    
    let  output_CheckGeneratedCSV = CheckGeneratedCSV(generatedCSV, editableTxt)
    
    if(output_CheckGeneratedCSV.isValid || output_CheckGeneratedCSV.isEmpty){
      return
    }

    if((output_CheckGeneratedCSV.isValid == false) && (output_CheckGeneratedCSV.hasPossibilityFix == false) ){
      console.log('Error: ' + output_CheckGeneratedCSV.errorMessage)
    }

    if((output_CheckGeneratedCSV.isValid == false) && (output_CheckGeneratedCSV.hasPossibilityFix == true) ){
      
      //setGeneratedCSV( generatedCSV + ';')

    }

  }



      try {  
        keys.forEach((key, indice) => {
          console.log('key[i]: ' + keys[indice] + ' | value[i]: ' + values[indice] + ' | ' + line + ' | ' + indice )
          // temp.push = [keys[indice], values[indice]]
          // temp.push(['1','2'])
          keyValueList.push([key,values[indice]])
          // console.log(temp)
          console.log(keyValueList)
          // keyValueList.push( [ keys[indice], values[indice] ] )
          // output.push(Object.fromEntries(temp))
        })  
      } catch (error) {console.log(error) }
      keyValueList = []
      */    
