'use client'

import { useState } from "react"

export default function Page(){
    const [x, setX] = useState(0)

    return(
        <>
        <button
            onClick={() => setX( x + 1 )}
        >
        Add X
        </button>

        <h1>X = {x} clicks </h1>
        </>
    )
}