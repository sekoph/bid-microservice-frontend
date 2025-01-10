import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const FearutedAuction = () => {
  return (
    <section className='flex flex-col gap-2 p-3'>
        <section className="flex flex-col gap-2 p-3">
      <div className="flex items-center">
        <h1 className="text-black font-bold">Featured Auction</h1>
      </div>
      <div className="flex flex-row gap-4 space-x-4">
        <div className="flex flex-col ">
          <div className="flex rounded-2xl justify-evenly border-1 border-black h-40 w-80 bg-[#F5F5DC] gap-3">
            <div className='flex rounded-l-2xl ml-[-12px] h-40 w-40 bg-[#223127] items-center justify-center'>
                <Image src="/images/category/vehicle.png" alt="image" height="80" width="80" content=""/>
            </div>
            <div className='flex flex-col justify-center rounded-r-2xl ml-[-12px] h-40 bg-[#4c4c30] p-3'>
                <div className='flex flex-row'>
                    <h4>Price:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>$87.00</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>StartTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>0800hrs</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>EndTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>0930hrs</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>RemainingTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-green-950 font-bold'>120mins</h4>
                </div>
                <div className='flex items-center justify-center'>
                    <Button variant='outline'>Bid</Button>
                </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='mt-2'><h1 className='text-black'>Marcedes X1</h1></div>
            <div className='mt-2 ml-[-10px]'><h1 className='text-green-950'>View More</h1></div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex rounded-2xl justify-evenly border-1 border-black h-40 w-80 bg-[#F5F5DC] gap-3">
            <div className='flex rounded-l-2xl ml-[-12px] h-40 w-40 bg-[#223127] items-center justify-center'>
                <Image src="/images/category/vehicle.png" alt="image" height="80" width="80" content=""/>
            </div>
            <div className='flex flex-col justify-center rounded-r-2xl ml-[-12px] h-40 bg-[#4c4c30] p-3'>
                <div className='flex flex-row'>
                    <h4>Price:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>$87.00</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>StartTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>0800hrs</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>EndTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>0930hrs</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>RemainingTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-green-950 font-bold'>120mins</h4>
                </div>
                <div className='flex items-center justify-center'>
                    <Button variant='outline'>Bid</Button>
                </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='mt-2'><h1 className='text-black'>Marcedes X1</h1></div>
            <div className='mt-2 ml-[-10px]'><h1 className='text-green-950'>View More</h1></div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex rounded-2xl justify-evenly border-1 border-black h-40 w-80 bg-[#F5F5DC] gap-3">
            <div className='flex rounded-l-2xl ml-[-12px] h-40 w-40 bg-[#223127] items-center justify-center'>
                <Image src="/images/category/vehicle.png" alt="image" height="80" width="80" content=""/>
            </div>
            <div className='flex flex-col justify-center rounded-r-2xl ml-[-12px] h-40 bg-[#4c4c30] p-3'>
                <div className='flex flex-row'>
                    <h4>Price:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>$87.00</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>StartTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>0800hrs</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>EndTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-[#C0C0C0]'>0930hrs</h4>
                </div>
                <div className='flex flex-row'>
                    <h4>RemainingTime:&nbsp;&nbsp;</h4>
                    <h4 className='text-green-950 font-bold'>120mins</h4>
                </div>
                <div className='flex items-center justify-center'>
                    <Button variant='outline'>Bid</Button>
                </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='mt-2'><h1 className='text-black'>Marcedes X1</h1></div>
            <div className='mt-2 ml-[-10px]'><h1 className='text-green-950'>View More</h1></div>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}

export default FearutedAuction