import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../page/Home";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import ErrorPage from "../page/ErrorPage";
import Admin from "../admin/Admin";
import TicketSearchPage from "../page/TicketSearchPage";
import CurrentBooking from "../components/CurrentBooking";
import Flights from "../admin/Flights"
import Aircrafts from "../admin/Aircrafts";
import TicketBooking from "../page/TicketBooking";
import BookingGuide from "../components/BookingGuide/BookingGuide";



const AppRoutes = () => {
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <div className="w-full h-screen bg-custom-gradient">
       {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookgui" element={<BookingGuide />} />
        <Route path="/book" element={<TicketSearchPage />} />
        <Route path="/book/:id" element={<TicketBooking />} />
        <Route path="/bookings" element={<CurrentBooking />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/flights" element={<Flights />} />
        <Route path="/admin/aircrafts" element={<Aircrafts />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default AppRoutes;
