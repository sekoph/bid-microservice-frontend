"use client"
import Categories from "@/components/Categories";
import FearutedAuction from "@/components/FearutedAuction";
import Header from "@/components/Header";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <section className="no-scrollbar flex flex-col w-full max-xl:max-h-screen max-xl:overflow-y-scroll">
        {/* header component */}
            <Header/>
            {/* Categories */}
            <div className="flex mt-4">
                <Categories />
            </div>
            {/* Featured Auction */}
            <div className="flex mt-4">
                <FearutedAuction />
            </div>
    </section>
  );
};

export default Home;
