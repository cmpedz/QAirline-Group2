import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ErrorPage from "../page/ErrorPage";
import TicketSearchPage from "../page/TicketSearchPage";



const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TicketSearchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
