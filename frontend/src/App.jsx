import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
