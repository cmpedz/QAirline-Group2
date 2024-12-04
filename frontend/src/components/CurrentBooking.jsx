import React from "react";
import "../CurrentBooking.css";

const CurrentBooking = () => {
  return (
    <div className="current-booking">
      <h1>Current Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Flight</th>
            <th>Departure City</th>
            <th>Arrival City</th>
            <th>Departure Date</th>
            <th>Arrival Date</th>
            <th>Seat Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PK-789</td>
            <td>Lahore</td>
            <td>Karachi</td>
            <td>2017-11-10</td>
            <td>2017-11-11</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentBooking;
