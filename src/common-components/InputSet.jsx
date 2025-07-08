import React from 'react'

export default function InputSet({labelName, htmlFor, id, value}) {
  return (
    <div className='flex flex-col justify-center bg-green-100 w-full px-1 py-2 rounded-[8px]'>
      <label className='text-black text-[12px]' htmlFor={htmlFor}>{labelName}</label>
      <p className='text-green-700 h-[25px] font-semibold' id={id}>{value}</p>
    </div>
  )
}