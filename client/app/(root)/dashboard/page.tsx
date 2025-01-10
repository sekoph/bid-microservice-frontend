import Header from '@/components/Header'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className="no-scrollbar flex flex-col w-full max-xl:max-h-screen max-xl:overflow-y-scroll">
        {/* header component */}
            <Header/>
            {/* user auctions */}
            <div className="flex p-6">
                <div className='flex flex-col'>
                    <h1 className='text-black font-bold'>DashBoard</h1>
                    <div className='flex flex-row mt-4 justify-evenly space-x-20'>
                        <div className='flex flex-row justify-between rounded-2xl h-34 w-80 bg-[#4c4c30] p-4'>
                            <div className='flex flex-col'>
                                <h4 className='text-black font-semibold'>Won Bids</h4>
                                <h4 className='text-[#C0C0C0] text-xl font-bold'>10</h4>
                            </div>
                            <div className='flex rounded-xl justify-center items-center bg-white h-12 w-12'>
                                <Image src="/icons/notification.svg" alt="image" height="30" width="30" content=""/>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between rounded-2xl h-34 w-80 bg-[#4c4c30] p-4'>
                            <div className='flex flex-col'>
                                <h4 className='text-black font-semibold'>Credited Wins</h4>
                                <h4 className='text-[#C0C0C0] text-xl font-bold'>10</h4>
                            </div>
                            <div className='flex rounded-xl justify-center items-center bg-white h-12 w-12'>
                                <Image src="/icons/notification.svg" alt="image" height="30" width="30" content=""/>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between rounded-2xl h-34 w-80 bg-[#4c4c30] p-4'>
                            <div className='flex flex-col'>
                                <h4 className='text-black font-semibold'>My Products</h4>
                                <h4 className='text-[#C0C0C0] text-xl font-bold'>10</h4>
                            </div>
                            <div className='flex rounded-xl justify-center items-center bg-white h-12 w-12'>
                                <Image src="/icons/notification.svg" alt="image" height="30" width="30" content=""/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-4 justify-evenly space-x-20'>
                        <div className='flex flex-row justify-between rounded-2xl h-34 w-80 bg-[#4c4c30] p-4'>
                            <div className='flex flex-col'>
                                <h4 className='text-black font-semibold'>My Transactions</h4>
                                <h4 className='text-[#C0C0C0] text-xl font-bold'>10</h4>
                            </div>
                            <div className='flex rounded-xl justify-center items-center bg-white h-12 w-12'>
                                <Image src="/icons/notification.svg" alt="image" height="30" width="30" content=""/>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between rounded-2xl h-34 w-80 bg-[#4c4c30] p-4'>
                            <div className='flex flex-col'>
                                <h4 className='text-black font-semibold'>Won Bids</h4>
                                <h4 className='text-[#C0C0C0] text-xl font-bold'>10</h4>
                            </div>
                            <div className='flex rounded-xl justify-center items-center bg-white h-12 w-12'>
                                <Image src="/icons/notification.svg" alt="image" height="30" width="30" content=""/>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between rounded-2xl h-34 w-80 bg-[#4c4c30] p-4'>
                            <div className='flex flex-col'>
                                <h4 className='text-black font-semibold'>Won Bids</h4>
                                <h4 className='text-[#C0C0C0] text-xl font-bold'>10</h4>
                            </div>
                            <div className='flex rounded-xl justify-center items-center bg-white h-12 w-12'>
                                <Image src="/icons/notification.svg" alt="image" height="30" width="30" content=""/>
                            </div>
                        </div>
                    </div>
                    <Table className='bg-[#223127] mt-4 rounded-xl'>
                        <TableHeader className='bg-[#4c4c30] rounded-xl'>
                            <TableRow>
                                <TableHead>Product Name</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Mercedes Benze</TableCell>
                                <TableCell>2017-09-23</TableCell>
                                <TableCell>$ 89.90</TableCell>
                                <TableCell>Delivered</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            {/* Transactions */}
            <div className="flex mt-4">
                
            </div>
    </section>
  )
}

export default page