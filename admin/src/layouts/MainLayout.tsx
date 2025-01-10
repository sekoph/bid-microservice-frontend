import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


const MainLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
  const token = useSelector((state: RootState) => state.user.token)

  if(!isAuthenticated && token === null) navigate('/')
  return (
    <section className="flex flex-row bg-[#010917] overflow-hidden">
      <div className="flex w-[17%]">
        <Navbar />
      </div>
      <main className="bg-[#b7bbc1] mt-2 rounded-sm w-[82%]">
        <Outlet/>
      </main>
    </section>
  );
};

export default MainLayout;
