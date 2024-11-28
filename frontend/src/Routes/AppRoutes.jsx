import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ErrorPage from "../page/ErrorPage";
import TicketSearchPage from "../page/TicketSearchPage";



const AppRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<TicketSearchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  );
};

export default AppRoutes;
