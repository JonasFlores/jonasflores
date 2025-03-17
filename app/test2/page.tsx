'use client'

import { useEffect, useState } from "react"

export default function Page(){
  const [data, setData] = useState()
  
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/protected")

      if (!res.ok) {
        throw new Error("Failed to fetch")
      }

      const json = await res.json()
      setData(json.message)
    })()
  }, [])

  return(
      <p>{data}</p>
  )
}

