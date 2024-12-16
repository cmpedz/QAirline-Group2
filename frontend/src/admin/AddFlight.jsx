import React, { useState, useEffect } from "react";
// import axios from "axios";

const AddFlight = ({ onClose }) => {
  const [aircrafts, setAircrafts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    flightNumber: "",
    aircraft: "",
    departureLocation: "",
    arrivalLocation: "",
    departureTime: "",
    arrivalTime: "",
    basePrice: "",
  });

  // useEffect(() => {
  //   const fetchAircrafts = async () => {
  //     try {
  //       // Giả lập API lấy danh sách máy bay
  //       const response = await fetch("/api/aircrafts");
  //       const data = await response.json();
  //       setAircrafts(data);
  //     } catch (error) {
  //       console.error("Error fetching aircrafts:", error);
  //     }
  //   };

  //   const fetchLocations = async () => {
  //     try {
  //       // Giả lập API lấy danh sách địa điểm
  //       const response = await fetch("/api/locations");
  //       const data = await response.json();
  //       setLocations(data);
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     }
  //   };
  //   fetchAircrafts();
  //   fetchLocations();
  // }, []);


  // Handle thay đổi form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   await axios.post("/api/flights", formData); // API để lưu flight mới
      alert("New flight created successfully!");
      onClose(); // Đóng form
    } catch (error) {
      console.error("Error creating flight:", error);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-30 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Form Header */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Add New Flight
        </h2>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Flight Number */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Flight Number
            </label>
            <input
              type="text"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
              placeholder="Enter flight number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Dropdown Rows */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Aircraft
              </label>
              <select
                name="aircraft"
                value={formData.aircraft}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Please select an aircraft</option>
                {aircrafts.map((ac) => (
                  <option key={ac._id} value={ac._id}>
                    {ac.airlineManufacturer} - {ac.airlineCode}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Base Price
              </label>
              <input
                type="number"
                name="basePrice"
                value={formData.basePrice}
                onChange={handleChange}
                placeholder="Enter base price"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Departure Location
              </label>
              <select
                name="departureLocation"
                value={formData.departureLocation}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select departure location</option>
                {locations.map((loc) => (
                  <option key={loc._id} value={loc.name}>
                    {loc.name} ({loc.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Arrival Location
              </label>
              <select
                name="arrivalLocation"
                value={formData.arrivalLocation}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select arrival location</option>
                {locations.map((loc) => (
                  <option key={loc._id} value={loc.name}>
                    {loc.name} ({loc.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Departure Date/Time
              </label>
              <input
                type="datetime-local"
                name="departureTime"
                value={formData.departureTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Arrival Date/Time
              </label>
              <input
                type="datetime-local"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlight;
