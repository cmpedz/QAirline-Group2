import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../page/Home";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import ErrorPage from "../page/ErrorPage";
import TicketBooking from "../page/TicketBooking";
import TicketSearchPage from "../page/TicketSearchPage";
import CurrentBooking from "../components/CurrentBooking";
import BookingGuide from "../components/BookingGuide/BookingGuide";



const AppRoutes = () => {
  return (
    <div className="w-full h-screen bg-custom-gradient">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookgui" element={<BookingGuide />} />
        <Route path="/book" element={<TicketSearchPage />} />
        <Route path="/book/:id" element={<TicketBooking />} />
        <Route path="/bookings" element={<CurrentBooking />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
