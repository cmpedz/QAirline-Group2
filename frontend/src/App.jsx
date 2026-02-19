import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/authContext";
import { DateFormatContext, DateFormatProvider } from "./context/dateFormatContext";

function App() {
  return (
    <AuthContextProvider>
     

      <Router>
        <AppRoutes />
        <ToastContainer />
     </Router>
    
    </AuthContextProvider>
    
  );
}


export default App;
