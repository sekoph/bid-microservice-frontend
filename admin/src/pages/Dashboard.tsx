import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";
import { Table, TableBody, TableCell } from "@/components/ui/table";
import { RootState } from "@/redux/store";
import { GiTrade } from "react-icons/gi";
import { useSelector } from "react-redux";

const dashboard = () => {
  const user = useSelector((state: RootState) => state.user.userDetails);

  return (
    <section className="flex flex-col">
      <Header title="Dashboard"/>
      <div className="flex flex-col ml-9">
        <div className="flex flex-row space-x-6">
          <ItemCard title="Products" value={674} icons={<GiTrade
                style={{
                  fontSize: "18px",
                  color:"#",
                }}
              />} details="+20% from last month"/>
              <ItemCard title="Users" value={12674} icons={<GiTrade
                style={{
                  fontSize: "18px",
                  color:"#",
                }}
              />} details="+230% from last month"/>
              <ItemCard title="Archived" value={1074} icons={<GiTrade
                style={{
                  fontSize: "18px",
                  color:"#",
                }}
              />} details="+120% from last month"/>
              <ItemCard title="Current Auction" value={14} icons={<GiTrade
                style={{
                  fontSize: "18px",
                  color:"#",
                }}
              />} details="+20% from last month"/>
        </div>
        
      </div>
      <div className="flex flex-row ml-9 mt-8 space-x-4">
        <div className="flex rounded-md h-[340px] w-[60%] border border-slate-400 p-4">
            <h1 className="text-slate-950 font-semibold ">Overview</h1>
        </div>
        <div className="flex flex-col rounded-md h-[340px] w-[36.5%] border border-slate-400 p-4">
          <div className="flex flex-col">
            <h1 className="text-slate-950 font-semibold ">Recent Auctions</h1>
            <p className="font-serif text-slate-700 text-sm">Campany made 100 auctions this month</p>
          </div>
          <Table>
            <TableBody className="flex flex-row justify-between">
              <TableCell className="flex flex-row space-x-2 items-center">
                <div className="flex rounded-full h-10 w-10 bg-slate-400 items-center justify-center"><h1 className="font-bold text-xl text-slate-950">OJ</h1></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-950 font-semibold text-base">James Orengo</h1>
                  <h1 className="text-slate-700 font-serif">orengo@gmail.com</h1>
                </div>
              </TableCell>
              <TableCell className="flex items-center justify-center"><h1 className="text-base font-semibold text-slate-950">+$900</h1></TableCell>
            </TableBody>
            <TableBody className="flex flex-row justify-between">
            <TableCell className="flex flex-row space-x-2 items-center">
                <div className="flex rounded-full h-10 w-10 bg-slate-400 items-center justify-center"><h1 className="font-bold text-xl text-slate-950">OJ</h1></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-950 font-semibold text-base">James Orengo</h1>
                  <h1 className="text-slate-700 font-serif">orengo@gmail.com</h1>
                </div>
              </TableCell>
              <TableCell className="flex items-center justify-center"><h1 className="text-base font-semibold text-slate-950">+$900</h1></TableCell>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default dashboard;
