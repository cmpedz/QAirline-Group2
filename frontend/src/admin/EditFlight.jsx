import React, { useState } from "react";
import axios from "axios";

const EditFlightForm = ({ flight, onSave, onCancel }) => {
  const [departureTime, setDepartureTime] = useState(flight.departDate.time);
  const [arrivalTime, setArrivalTime] = useState(flight.arriveDate.time);
  const [status, setStatus] = useState("Delayed");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedFlight = {
        departDate: { date: flight.departDate.date, time: departureTime },
        arriveDate: { date: flight.arriveDate.date, time: arrivalTime },
        status,
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
          {/* Departure Time */}
          <div>
            <label className="block font-medium">New Departure Time</label>
            <input
              type="time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Arrival Time */}
          <div>
            <label className="block font-medium">New Arrival Time</label>
            <input
              type="time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="OK">OK</option>
              <option value="Delayed">Delayed</option>
            </select>
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

export default EditFlightForm;
