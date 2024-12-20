import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";

function Navbar() {
  const { user, token } = useContext(authContext);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 4000); 
  };

  const handleClickOutside = () => {
    setDropdownVisible(false);
  };

  // Kiểm tra trạng thái đăng nhập
  const isUserLoggedIn = localStorage.getItem("token") !== null;
  const userData = JSON.parse(localStorage.getItem("user"));
  const profilePic =
    "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload(); // Refresh trang sau khi đăng xuất
  };
  
  return (
    <header className="bg-transparent px-6 py-4 shadow-md">
      <nav className="flex justify-between items-center w-full max-w-[1200px] mx-auto">
        {/* Logo và Links */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link to={"/"} className="text-white font-bold text-3xl italic">
            QAIRLINE
          </Link>
          {/* Links */}
          <ul className="flex items-center gap-6">
            <li>
              <Link to={"/"} className="text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
            <Link to={"/bookgui"} className="text-white hover:underline">
                Booking Guide
            </Link>
            </li>
            <li
              className="relative key-info-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-white hover:underline">
                Key Info
              </div>
              {isDropdownVisible && (
                <ul className="absolute left-0 top-8 bg-white shadow-lg border border-gray-300 rounded-lg w-64 z-50">
                  <li className="p-3 border-b hover:bg-gray-100 text-[#00008B]">
                    <Link to={"/bh"}>
                      <strong>Insurance</strong>
                      <p className="text-sm text-gray-500">
                        Feel secure and comfortable with reputable insurance programs...
                      </p>
                    </Link>
                  </li>
                  <li className="p-3 hover:bg-gray-100 text-[#00008B]">
                    <Link to={"/taxi"}>
                      <strong>
                        Taxi Service{" "}
                        <span className="bg-red-500 text-white px-1 py-0.5 text-xs rounded">
                          HOT
                        </span>
                      </strong>
                      <p className="text-sm text-gray-500">
                        Easily pre-book a Green SM Taxi at the airport with affordable
                        packages...
                      </p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            <li>
              <Link to={"/book"} className="text-white hover:underline">
                Book Flight
              </Link>
            </li>
            {isUserLoggedIn && (
              <li>
                <Link
                  to={"/bookings"}
                  className="text-white hover:underline"
                >
                  Current Bookings
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* User actions */}
        <div className="flex items-center gap-6">
          {isUserLoggedIn ? (
            <div className="flex items-center gap-6">
              <img
                src={profilePic}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <button
                onClick={handleLogout}
                className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-gray-900 transition duration-200"
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              {/* Nút đỏ chứa Login | Sign up */}
              <div className="flex items-center bg-transparent border border-white text-white px-6 py-2 rounded-full gap-2">
                <Link to={"/login"} className="hover:underline">
                  Login
                </Link>
                <span className="border-l border-white h-5"></span>
                <Link to={"/signup"} className="hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
