import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <section className="no-scrollbar flex flex-col w-full max-xl:max-h-screen max-xl:overflow-y-scroll">
        {/* header component */}
            <Header/>
            {/* Categories */}
            <div className="flex mt-4">
                {/* <Categories /> */}
            </div>
            {/* Featured Auction */}
            <div className="flex mt-4">
                {/* <FearutedAuction /> */}
            </div>
    </section>
  )
}

export default page