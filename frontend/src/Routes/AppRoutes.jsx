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
const isAdminRoute = location.pathname.startsWith("/admin");

const AppRoutes = () => {
  return (
    <>
       {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<TicketSearchPage />} />
        <Route path="/bookings" element={<CurrentBooking />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/flights" element={<Flights />} />
        <Route path="/admin/aircrafts" element={<Aircrafts />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default AppRoutes;
