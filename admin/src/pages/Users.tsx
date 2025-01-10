import Header from "@/components/Header";

const Users = () => {
  return (
    <section className="flex flex-col">
      <Header title="Manage Users" />
      <div className="flex flex-col ml-9">
        <div className="flex flex-row space-x-6">
          <div className="flex flex-col h-24 w-40 rounded-md bg-[#aaaeb5] items-center justify-center">
            <h1 className="font-semibold text-slate-950 text-sm">
              Total Active Users
            </h1>
            <h1 className="font-extrabold text-xl text-slate-950">536</h1>
          </div>
          <div className="flex flex-col h-24 w-40 rounded-md bg-[#aaaeb5] items-center justify-center">
            <h1 className="font-semibold text-slate-950 text-sm">
              Total Inactive Users
            </h1>
            <h1 className="font-extrabold text-xl text-slate-950">536</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
