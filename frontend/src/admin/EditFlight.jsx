import React, { useState } from "react";
import axios from "axios";

const EditFlight = ({ flight, onSave, onCancel }) => {
  
    const [departureDateTime, setDepartureDateTime] = useState(
    `${flight.departDate.date}T${flight.departDate.time}`
  );
  const [arrivalDateTime, setArrivalDateTime] = useState(
    `${flight.arriveDate.date}T${flight.arriveDate.time}`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [departDate, departTime] = departureDateTime.split("T");
    const [arriveDate, arriveTime] = arrivalDateTime.split("T");

    try {
      const updatedFlight = {
        departDate: { date: departDate, time: departTime },
        arriveDate: { date: arriveDate, time: arriveTime },
        status: "Delayed",
      };

      await axios.put(
        `http://localhost:5000/api/flights/updateFlight/${flight._id}`,
        updatedFlight
      );

      onSave(); 
    } catch (error) {
      console.error("Error updating flight:", error);
      alert("Failed to update flight. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Edit Flight</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Departure Date & Time */}
          <div>
            <label className="block font-medium">New Departure Date & Time</label>
            <input
              type="datetime-local"
              value={departureDateTime}
              onChange={(e) => setDepartureDateTime(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Arrival Date & Time */}
          <div>
            <label className="block font-medium">New Arrival Date & Time</label>
            <input
              type="datetime-local"
              value={arrivalDateTime}
              onChange={(e) => setArrivalDateTime(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFlight;
