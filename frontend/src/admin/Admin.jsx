import React from "react";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
       <aside className="w-64 bg-blue-500 text-white flex flex-col">
        <div className="p-4 font-bold text-lg">MCH</div>
        <nav className="flex flex-col space-y-2 px-4">
          <a href="#" className="hover:bg-blue-300 p-2 rounded flex items-center">
            <img src="\src\assets\images\homepage.png" alt="Home Icon" className="w-5 h-5 mr-2" /> Home
          </a>
          <a href="#" className="hover:bg-blue-300 p-2 rounded">Manage Flights</a>
          <a href="#" className="hover:bg-blue-300 p-2 rounded">Manage Bookings</a>
          <a href="#" className="hover:bg-blue-300 p-2 rounded">Manage Aircrafts</a>
          <a href="#" className="hover:bg-blue-300 p-2 rounded">Manage Airport</a>
          <a href="#" className="hover:bg-blue-300 p-2 rounded">Promotions</a>
          <a href="#" className="hover:bg-blue-300 p-2 rounded">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">Welcome back, Administrator!</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-yellow-300 text-center p-6 rounded shadow">
            <h2 className="text-2xl font-bold">10</h2>
            <p className="mt-2">Total Users</p>
          </div>
          <div className="bg-yellow-300 text-center p-6 rounded shadow">
            <h2 className="text-2xl font-bold">5</h2>
            <p className="mt-2">Total Flights</p>
          </div>
          <div className="bg-yellow-300 text-center p-6 rounded shadow">
            <h2 className="text-2xl font-bold">10</h2>
            <p className="mt-2">Total Airlines</p>
          </div>
          <div className="bg-yellow-300 text-center p-6 rounded shadow">
            <h2 className="text-2xl font-bold">22</h2>
            <p className="mt-2">Airports</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
