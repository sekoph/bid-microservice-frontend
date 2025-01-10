import Header from '@/components/Header'
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import ProductsTable from '@/components/ProductsTable';


const products = () => {
  return (
    <section className='flex flex-col'>
      <Header title='Products'/>
      <div className='flex flex-col ml-9'>
      <Tabs.Root defaultValue="tab1" className="w-full">
      {/* Tabs List */}
      <Tabs.List className="flex">
        <Tabs.Trigger
          value="tab1"
          className="px-4 py-2 text-slate-950 hover:bg-[#9ca3ad] rounded-md data-[state=active]:text-[#fdfcfc] data-[state=active]:border-b-2 data-[state=active]:bg-slate-800"
        >
          All
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="px-4 py-2 text-slate-950 hover:bg-[#9ca3ad] rounded-md data-[state=active]:text-[#fdfcfc] data-[state=active]:border-b-2 data-[state=active]:bg-slate-800"
        >
          Awaiting Action
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab3"
          className="px-4 py-2 text-slate-950 hover:bg-[#9ca3ad] rounded-md data-[state=active]:text-[#fdfcfc] data-[state=active]:border-b-2 data-[state=active]:bg-slate-800"
        >
          In Auction
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab4"
          className="px-4 py-2 text-slate-950 hover:bg-[#9ca3ad] rounded-md data-[state=active]:text-[#fdfcfc] data-[state=active]:border-b-2 data-[state=active]:bg-slate-800"
        >
          Bided
        </Tabs.Trigger>
      </Tabs.List>

      {/* Tabs Content */}
      <Tabs.Content value="tab1" className="p-4">
        <ProductsTable type='All'/>
      </Tabs.Content>
      <Tabs.Content value="tab2" className="p-4">
      <ProductsTable type='Awaiting Action'/>
      </Tabs.Content>
      <Tabs.Content value="tab3" className="p-4">
      <ProductsTable type='In Auction'/>
      </Tabs.Content>
      <Tabs.Content value="tab4" className="p-4">
      <ProductsTable type='Bided'/>
      </Tabs.Content>
    </Tabs.Root>
      </div>
    </section>
  )
}

export default products
