import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const BookedFlights = () => {
  const [bookings] = useState([
    {
      userName: "John Doe",
      flightNo: "VN123",
      aircraft: "Boeing 777",
      departure: { location: "Hanoi (HAN)", time: "2024-12-20 08:00 AM" },
      arrival: { location: "Ho Chi Minh City (SGN)", time: "2024-12-20 10:00 AM" },
      seatClass: "Business",
      seatNumber: "12B",
      totalPrice: "$500",
    },
    {
      userName: "Jane Smith",
      flightNo: "VN456",
      aircraft: "Airbus A320",
      departure: { location: "Da Nang (DAD)", time: "2024-12-21 02:00 PM" },
      arrival: { location: "Ho Chi Minh City (SGN)", time: "2024-12-21 04:00 PM" },
      seatClass: "Economy",
      seatNumber: "24A",
      totalPrice: "$150",
    },
  ]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Manage Bookings</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
            <thead className="bg-gray-200 text-gray-700 text-sm uppercase font-semibold">
              <tr>
                <th className="py-4 px-6 text-center">User</th>
                <th className="py-4 px-6 text-center">Flight No.</th>
                <th className="py-4 px-6 text-center">Aircraft</th>
                <th className="py-4 px-6 text-center">Departure</th>
                <th className="py-4 px-6 text-center">Arrival</th>
                <th className="py-4 px-6 text-center">Seat Class</th>
                <th className="py-4 px-6 text-center">Seat Number</th>
                <th className="py-4 px-6 text-center">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-t hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-center">{booking.userName}</td>
                  <td className="py-4 px-6 text-center">{booking.flightNo}</td>
                  <td className="py-4 px-6 text-center">{booking.aircraft}</td>
                  <td className="py-4 px-6 text-center">
                    <p className="font-semibold">{booking.departure.location}</p>
                    <p className="text-gray-500 text-sm">{booking.departure.time}</p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <p className="font-semibold">{booking.arrival.location}</p>
                    <p className="text-gray-500 text-sm">{booking.arrival.time}</p>
                  </td>
                  <td className="py-4 px-6 text-center">{booking.seatClass}</td>
                  <td className="py-4 px-6 text-center">{booking.seatNumber}</td>
                  <td className="py-4 px-6 text-center">{booking.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};



export default BookedFlights;