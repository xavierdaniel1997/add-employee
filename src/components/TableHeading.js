import React from 'react'

const TableHeading = ({tableTitle}) => {
  return (
    <>
        <th className={`p-3 ${tableTitle === "ID" ? "w-32" : " w-44"}`}>{tableTitle}</th>
    </>
  )
}

export default TableHeading