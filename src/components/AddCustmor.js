import React from 'react'
import CustmorForm from './CustmorForm'

const AddCustmor = ({hiddenShowButton}) => {
  return (
    <div className='bg-slate-100 bg-opacity-95 p-5 w-6/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2'>
      <div  className='flex justify-end' onClick={hiddenShowButton}>
        <button className='text-lg' >X</button>
      </div>
      <h1 className='font-semibold text-2xl text-center'>ADD DETIALS</h1>
      <div>
        <CustmorForm/>
      </div>
    </div>
  )
}

export default AddCustmor