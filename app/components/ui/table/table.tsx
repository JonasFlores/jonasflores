'use client'

import { useState } from "react"
import Pagination from "./pagination"


export default function Table(){
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  return(
  <>
    <Pagination rowsPerPage={rowsPerPage} page={page} total={55} setPage={setPage} />
  </>
  )
}