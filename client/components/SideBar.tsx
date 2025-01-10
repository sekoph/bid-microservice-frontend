"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

//Import a data type from the data types repository 
import { DataTypeName } from "@/types";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-4 mb-12 cursor-pointer">
        <Image src="/icons/logo2.webp" alt="logo" width={68} height={28} />
          {/* <h1 className="text-white">Auction</h1> */}
        </Link>
        {sidebarLinks.map((page) => {
          const isActive =
            pathName === page.route || pathName.startsWith(`${page.route}/`);
          return (
            <Link href={page.route} key={page.label} className={isActive ? "active" : ""}>
              <div>
                <Image src={page.imgURL || ''} alt={page.label} width={24} height={24} className="" />
              </div>
            <p className="text-black text-16 font-semibold max-xl:hidden">{page.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
