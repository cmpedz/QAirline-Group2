import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import AddAirport from "./AddAirport";
import axios from "axios";

const Airports = () => {
  const [airports, setAirports] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchAirports = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/airports/getAllAirports");
      setAirports(response.data); 
    } catch (error) {
      console.error("Error fetching airports:", error);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  const handleSave = () => {
    fetchAirports();
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
                  <td className="py-4 px-6 text-center">{airport.airportCode}</td>
                  <td className="py-4 px-6 text-center">{airport.airport}</td>
                  <td className="py-4 px-6 text-center">{airport.nameLocation}</td>
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