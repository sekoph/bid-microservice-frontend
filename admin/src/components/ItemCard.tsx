import React, { ReactNode } from 'react'

const ItemCard = ({ title, value, icons, details }:{ title:string, value:number, icons: ReactNode, details: string}) => {
  return (
    <div className="flex flex-col h-22 w-60 rounded-lg bg-[#aaaeb5] p-6">
            <div className='flex flex-row justify-between'>
            <h1 className="font-medium text-slate-800 text-sm">{title}</h1>
            {icons}
            </div>
            <h1 className="font-extrabold text-xl text-slate-950">+{value}</h1>
            <h1 className="font-sans text-sm text-slate-600">{details}</h1>

    </div>
  )
}

export default ItemCard