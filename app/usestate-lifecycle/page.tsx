'use client'

import React, { Children, useState } from 'react';
import { constItems, Item } from "@/data/const-lifecycle"
import clsx from 'clsx';
import { useRouter } from 'next/navigation';



export default function Page(){

  const [stateItems, setStateItems] = useState<Item[]>([{name:'Def',value:'Default state'}])
  const [counter, setCounter] = useState(1)
  const router = useRouter()

  const addItem = () => {

    let text = 'by function setState ' + counter
    setStateItems([ ...stateItems, { name:text, value:text } ])

    text = 'by function push in const array ' + counter
    constItems.push({name: text, value:text})

    setCounter(counter + 1)
  }

  function reload(){
    return location.reload()
  }

  function goBack(){
    router.push('/usestate-lifecycle/refresh')
  }

  return(
    <>
    <div>
      <div className='mx-2 text-slate-800'>
        <div className='font-semibold text-lg'>Description</div>
        <div className='text-sm'>
          This page ilustrates the lifecycle of UseState and Consts in React.
          <br />
          Feel free to click on the action buttons  to gain a better understanding of their behavior.
        </div>
      </div>
      <hr className='my-4'/>
      <div className='flex gap-4'>
          <Card cardItems={stateItems} title="useState itens lifecycle"></Card>
          <Card cardItems={constItems} title='const Settings lifecycle'></Card>
      </div>
      <div className='py-2 px-6 text-slate-800 bg-slate-200 mt-3'>
        Current Counter: {counter}
      </div>

      <hr className='my-4'/>
      <div className='flex flex-row gap-2 text-xs justify-center'>
          <button onClick={addItem} className='rounded bg-green-400 shadow-lg text-slate-800 px-4 py-2 hover:font-medium'>Apend log Itens</button>
          <Tooltip message='This action calls a function who redirect the page using the router'>
            <button onClick={goBack} className='rounded bg-yellow-300 text-slate-800 px-4 py-2 shadow-lg hover:font-medium' >Soft Refresh</button>
          </Tooltip>
          <button onClick={reload} className='rounded bg-red-300 text-slate-800 px-4 py-2 shadow-lg hover:font-medium'>Hard Refresh</button>
          
        
      </div>

    </div>
       
    </>
  )
}

function Card({cardItems,title,clasName } : {cardItems: Item[],title: string, clasName?: string}){
  return(
  <>
    <div className='flex-auto basis-1/2'>
      <h1 className='text-sm text-center mb-2 font-medium'>{title}</h1>
      <div className={clsx( clasName,"rounded-sm bg-slate-200 text-slate-800 h-40 overflow-y-auto p-5 text-xs")}>
        { cardItems.map((item, i) => {return(
        <div key={i}>
          <p> {item.value} </p>
          <hr className='mb-1 border-black border-opacity-40' />
        </div>
        )}) }
      </div>
    </div>
  </>
  )
}

function Tooltip({ children, message } : {children: React.ReactNode, message?: string}){
  const [show, setShow] = useState(false)

  return (
  <>
    <div className='relative border' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <div className={clsx('absolute mt-2 p-1 rounded-sm text-center -mx-32 text-zinc-900 bg-slate-300',{'hidden': !show}) }>{message}</div>
    </div>
  
  </>
  )
}