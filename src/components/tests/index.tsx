import { NextPage } from 'next';
import React from 'react'

interface IPropinha{
    value: string
}

const TestScreen: NextPage<IPropinha> = (propinha) => {
    console.log(propinha.value)
    
    return(
    <>
    Passing props Next, React and Typescript.<br />
    {propinha.value}
    </>
    )
}

export default TestScreen;