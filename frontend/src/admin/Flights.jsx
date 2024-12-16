import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import AddFlight from "./AddFlight";


const Flights = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">All Flights</h1>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition" onClick={() => setShowForm(true)}>
            + New Flight
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
            <thead className="bg-gray-200 text-gray-700 text-sm uppercase font-semibold">
              <tr>
                <th className="py-4 px-6 text-center">Flight No.</th>
                <th className="py-4 px-6 text-center">Aircraft</th>
                <th className="py-4 px-6 text-center">Departure</th>
                <th className="py-4 px-6 text-center">Arrival</th>
                <th className="py-4 px-6 text-center">Status</th>
                <th className="py-4 px-6 text-center">Class Info</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {/* Row 1 */}
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="py-4 px-6 text-center font-medium">VN123</td>
                <td className="py-4 px-6 text-center">Boeing 777</td>
                <td className="py-4 px-6 text-center">
                  <p className="font-bold">Hanoi (HAN)</p>
                  <p className="text-sm text-gray-600">2024-12-20 08:00 AM</p>
                </td>
                <td className="py-4 px-6 text-center">
                  <p className="font-bold">Ho Chi Minh City (SGN)</p>
                  <p className="text-sm text-gray-600">2024-12-20 10:00 AM</p>
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex justify-center items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Scheduled
                    </span>
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <div>
                    <p className="font-semibold">Economy:</p>
                    <p>Price: $200 | Booked: 50 | Available: 100</p>
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold">Business:</p>
                    <p>Price: $500 | Booked: 10 | Available: 20</p>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="text-blue-500 font-semibold hover:underline">
                    Edit
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="py-4 px-6 text-center font-medium">VN456</td>
                <td className="py-4 px-6 text-center">Airbus A320</td>
                <td className="py-4 px-6 text-center">
                  <p className="font-bold">Da Nang (DAD)</p>
                  <p className="text-sm text-gray-600">2024-12-21 14:00 PM</p>
                </td>
                <td className="py-4 px-6 text-center">
                  <p className="font-bold">Ho Chi Minh City (SGN)</p>
                  <p className="text-sm text-gray-600">2024-12-21 16:00 PM</p>
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex justify-center items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      Delayed
                    </span>
                    <i className="fas fa-exclamation-circle text-yellow-500 mt-1"></i>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <div>
                    <p className="font-semibold">Economy:</p>
                    <p>Price: $150 | Booked: 80 | Available: 50</p>
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold">Business:</p>
                    <p>Price: $400 | Booked: 20 | Available: 10</p>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="text-blue-500 font-semibold hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {showForm && <AddFlight onClose={() => setShowForm(false)} />}
      </main>
    </div>
  );
};

export default Flights;
