import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddAirport from "./AddAirport";

const Airports = () => {
  const [airports, setAirports] = useState([
    // Dữ liệu giả
    { id: "AP001", name: "Noi Bai International Airport", location: "Hanoi", code: "HAN" },
    { id: "AP002", name: "Tan Son Nhat International Airport", location: "Ho Chi Minh City", code: "SGN" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleSave = (newAirport) => {
    setAirports([...airports, { id: `AP00${airports.length + 1}`, ...newAirport }]);
    setShowForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Manage Airports</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            + New Airport
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
            <thead className="bg-gray-200 text-gray-700 text-sm uppercase font-semibold">
              <tr>
                <th className="py-4 px-6 text-center">Airport Code</th>
                <th className="py-4 px-6 text-center">Airport Name</th>
                <th className="py-4 px-6 text-center">Location</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {airports.map((airport, index) => (
                <tr key={index} className="border-t hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-center">{airport.code}</td>
                  <td className="py-4 px-6 text-center">{airport.name}</td>
                  <td className="py-4 px-6 text-center">{airport.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Form */}
        {showForm && (
          <AddAirport
            onSave={handleSave}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Airports;