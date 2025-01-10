import { RiAuctionFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";
import { MdCloseFullscreen } from "react-icons/md";
import { GiTrade } from "react-icons/gi";


import { useLocation, NavLink } from "react-router-dom";
const navbar = () => {
  const location = useLocation();

  const isActiveLink = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <section className="flex flex-col h-screen sticky w-[100%]">
      <header className="flex flex-row p-4 ml-3  items-center">
      <div className="flex flex-row flex-1 space-x-2 center">
        <GiTrade
                style={{
                  fontSize: "30px",
                  color:"#C0C0C0",
                }}
              />
        <h1 className="text-[#C0C0C0] font-semibold text-xl">E-Auction</h1>
        </div>
        <div className="flex justify-end">
        <MdCloseFullscreen
                style={{
                  fontSize: "20px",
                  color:"#C0C0C0",
                }}
              />
        </div>
      </header>
      <nav className="flex p-4">
        <div className="container mt-10">
          <div className="flex flex-col">
            <div
              className={`flex flex-row py-2 px-2 space-x-3 w-36 items-center rounded hover:bg-[#64676c] ${isActiveLink("/home") ? "bg-[#34373a]" : ""
                }`}
            >
              <AiFillProduct
                style={{
                  fontSize: "20px",
                  color: isActiveLink("/home") ? "white" : "#C0C0C0",
                }}
              />
              <NavLink
                to="/home"
                className={`${isActiveLink("/home") ? "text-white" : "text-[#C0C0C0]"
                  }`}
              >
                Dashboard
              </NavLink>
            </div>
            <div
              className={`flex flex-row py-2 px-2 space-x-3 w-36 items-center rounded hover:bg-[#64676c] ${isActiveLink("/home/auction") ? "bg-[#34373a]" : ""
                }`}
            >
              <RiAuctionFill
                style={{
                  fontSize: "20px",
                  color: isActiveLink("/home/auction") ? "white" : "#C0C0C0",
                }}
              />
              <NavLink
                to="/home/auction"
                className={`${isActiveLink("/home/auction") ? "text-white" : "text-[#C0C0C0]"
                  }`}
              >
                Auction
              </NavLink>
            </div>
            <div
              className={`flex flex-row py-2 px-2 space-x-3 w-36 items-center rounded hover:bg-[#64676c] ${isActiveLink("/home/products") ? "bg-[#34373a]" : ""
                }`}
            >
              <FaProductHunt
                style={{
                  fontSize: "20px",
                  color: isActiveLink("/home/products") ? "white" : "#C0C0C0",
                }}
              />
              <NavLink
                to="/home/products"
                className={`${isActiveLink("/home/products")
                    ? "text-white"
                    : "text-[#C0C0C0]"
                  }`}
              >
                Products
              </NavLink>
            </div>
            <div
              className={`flex flex-row py-2 px-2 space-x-3 w-36 items-center rounded hover:bg-[#64676c] ${isActiveLink("/home/users") ? "bg-[#34373a]" : ""
                }`}
            >
              <LiaUsersSolid
                style={{
                  fontSize: "22px",
                  color: isActiveLink("/home/users") ? "white" : "#C0C0C0",
                }}
              />

              <NavLink
                to="/home/users"
                className={`${isActiveLink("/home/users")
                    ? "text-white"
                    : "text-[#C0C0C0]"
                  }`}
              >
                Users
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default navbar;
