import React from "react";
import StatCard from "./components/StatCard";
import Sidebar from "./components/Sidebar";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar/>
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
