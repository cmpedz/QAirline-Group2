import React from "react";
import SidebarItem from "./components/SidebarItem";
import StatCard from "./components/StatCard";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
       <aside className="w-64 bg-blue-500 text-white flex flex-col rounded-xl overflow-hidden shadow-2xl">
        <div className="p-4 font-bold text-lg">MCH</div>
        <nav className="flex flex-col space-y-2 px-4">
            <SidebarItem href="#" imageSrc="\src\assets\images\admin\home.png" text="Home" />
            <SidebarItem href="/all-flights" imageSrc="\src\assets\images\admin\flight.png" text="Manage Flights" />
            <SidebarItem href="#" imageSrc="\src\assets\images\admin\booking.png" text="Manage Bookings" />
            <SidebarItem href="#" imageSrc="\src\assets\images\admin\airplane.png" text="Manage Aircrafts" />
            <SidebarItem href="#" imageSrc="\src\assets\images\admin\airpot.png" text="Manage Airport" />
            <SidebarItem href="#" imageSrc="\src\assets\images\admin\shopping-online.png" text="Promotions" />
            <SidebarItem href="#" imageSrc="\src\assets\images\admin\logout.png" text="Logout" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gradient-to-b from-gray-50 to-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mb-6">
  Welcome back, Administrator!
        </h1>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value="5" label="Total Flights" />
          <StatCard value="10" label="Total Bookings" />
          <StatCard value="10" label="Total Aircrafts" />
          <StatCard value="22" label="Promotions" />
        </div>
      </main>
    </div>
  );
};

export default Admin;
