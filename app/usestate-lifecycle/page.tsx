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
      <div className='ml-10'>
        <div className='font-semibold'>Description</div>
        <div className='text-sm'>
          This page ilustrates the lifecycle of UseState and Consts in React.
          <br />
          Feel free to click on the action buttons  to gain a better undertanding of their behavior.
        </div>
      </div>
      <hr className='my-4'/>
      <div className='flex gap-4'>
          <Card cardItems={stateItems} title="useState itens lifecycle" clasName="bg-red-600" ></Card>
          <Card cardItems={constItems} title='const Settings lifecycle' clasName='bg-red-700'></Card>
      </div>
      <div className='p-5 text-white bg-slate-500 mt-5'>
        Current Counter: {counter}
      </div>

      <hr className='my-6'/>
      <div className='text-sm mb-2'>Actions:</div>
      <div className='flex gap-5'>

          <button onClick={addItem} className='rounded bg-green-700 text-white p-4'>Apend log Itens</button>
          <Tooltip message='This action calls a function who redirect the page using the router'>
          <button onClick={goBack} className='rounded bg-yellow-600 text-white p-4' >Soft Refresh</button>
          </Tooltip>
          <button onClick={reload} className='rounded bg-red-600 text-white p-4'>Hard Refresh</button>
          
        
      </div>

    </div>
       
    </>
  )
}

function Card({
    cardItems,
    title,
    clasName  
  } : {
    cardItems: Item[],
    title: string,
    clasName: string
  }){
  return(
  <>
    <div className='flex-auto w-6/12'>
      <h1 className='text-xl text-center p-2'>{title}</h1>
      <div className={clsx( clasName,"text-white h-60 overflow-y-auto p-5")}>
        { cardItems.map((item) => {return(
        <div key={crypto.randomUUID()}>
          <p> {item.value} </p>
          <hr className='mt-1'/>
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
    <div className='relative inline-block' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <span className={clsx('absolute top-full left-0 bg-slate-400 p-2 my-2 -mx-28 text-center text-zinc-900 rounded-md',{'hidden': !show}) }>{message}</span>
    </div>
  
  </>
  )
}