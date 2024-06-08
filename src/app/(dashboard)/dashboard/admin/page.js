import Graph from "@/components/dashboard/admin/Graph";
import Image from "next/image";

import UserIcon from "@/static/images/placeholders/users-icon.png";
import TrafficIcon from "@/static/images/placeholders/traffic.png";
import PerformanceIcon from "@/static/images/placeholders/performance.png";

const salesData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      data: [10000, 12000, 9000, 11000, 9500, 13000, 10500],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const AdminDashboard = () => {
  return (
    <>
      <div className=" bg-teal-500  p-8 m-0">
        {/* Traffic Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Traffic */}
          <div className="rounded-lg p-4 bg-white flex items-center mb-4 lg:mb-0 lg:mr-4 lg:w-1/3">
            <div className="flex-shrink-0">
              <Image
                src={TrafficIcon}
                alt="Traffic Icon"
                className="h-20 w-20 object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-teal-500 text-lg font-semibold">TRAFFIC</h2>
              {/* Display Traffic Number */}
              <p className="text-teal-500 text-2xl font-bold">350,897</p>
              {/* Traffic Change Since Last Month */}
              <div className="flex items-center mt-2">
                <i className="bi bi-arrow-up-circle-fill text-green-800 mr-2"></i>
                <p className="text-green-800 text-sm">3.48% Since last month</p>
              </div>
            </div>
          </div>

          {/* New Users */}
          <div className="rounded-lg p-4 bg-white flex items-center mb-4 lg:mb-0 lg:mx-4 lg:w-1/3">
            <div className="flex-shrink-0">
              <Image
                src={UserIcon}
                alt="Users Icon"
                className="h-20 w-20 object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-teal-500 text-lg font-semibold">NEW USERS</h2>
              {/* Display New Users Number */}
              <p className="text-teal-500 text-2xl font-bold">2,356</p>
              {/* New Users Change Since Last Week */}
              <div className="flex items-center mt-2">
                <i className="bi bi-arrow-down-circle-fill text-red-500 mr-2"></i>
                <p className="text-red-500 text-sm">3.48% Since last week</p>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="rounded-lg p-4 bg-white flex items-center lg:w-1/3">
            <div className="flex-shrink-0">
              <Image
                src={PerformanceIcon}
                alt="Performance Icon"
                className="h-20 w-20 object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-teal-500 text-lg font-semibold">
                PERFORMANCE
              </h2>
              {/* Display Performance Metrics */}
              <p className="text-teal-500 text-2xl font-bold">49.65%</p>
              {/* Performance Change Since Last Month */}
              <div className="flex items-center mt-2">
                <i className="bi bi-arrow-up-circle-fill text-green-800 mr-2"></i>
                <p className="text-green-800 text-sm">12% Since last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Graph data={salesData} />
      </div>
    </>
  );
};

export default AdminDashboard;
