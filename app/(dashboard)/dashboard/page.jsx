import RecentTickets from "@/components/RecentTickets";
import SalesChart from "@/components/SalesChart";
import { IoTrendingUpOutline } from "react-icons/io5";

function Dashboard() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="card bg-violet-200 w-full ">
          <div className="card-body">
            <p className="card-title font-normal">Total Sale</p>
            <p className="text-4xl font-medium flex items-center justify-between">
              $8,414
              <span className="bg-white text-green-500 px-3 rounded-3xl">
                <IoTrendingUpOutline />
              </span>
            </p>
          </div>
        </div>
        <div className="card bg-blue-200 w-full ">
          <div className="card-body">
            <p className="card-title font-normal">Total New Leads</p>
            <p className="text-4xl font-medium flex items-center justify-between">
              12
              <span className="bg-white text-green-500 px-3 rounded-3xl">
                <IoTrendingUpOutline />
              </span>
            </p>
          </div>
        </div>
        <div className="card bg-emerald-200 w-full ">
          <div className="card-body">
            <p className="card-title font-normal">Total Open Tickets</p>
            <p className="text-4xl font-medium flex items-center justify-between">
              58
              <span className="bg-white text-green-500 px-3 rounded-3xl">
                <IoTrendingUpOutline />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 card grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="bg-white shadow-lg border rounded-2xl py-4">
          <p className="px-7 text-2xl font-medium mb-5">Sales Overview</p>
          <SalesChart />
        </div>
        <RecentTickets />
      </div>
    </div>
  );
}

export default Dashboard;
