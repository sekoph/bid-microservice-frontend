"use client"
import SideBar from "@/components/SideBar";
import { RootState } from "@/redux/store";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
  const token = useSelector((state: RootState) => state.user.token)

  if(!isAuthenticated && token === null) redirect('/sign-in')
  return (
   <main className="flex h-screen w-full font-inter bg-[#faf6f6]">
    <SideBar/>
        <div className="flex size-full">
            {children}
        </div>
   </main>
  );
}
