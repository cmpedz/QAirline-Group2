import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";

function Navbar() {
  const { user, token } = useContext(authContext);

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
            MCH
          </Link>
          {/* Links */}
          <ul className="flex items-center gap-6">
            <li>
              <Link to={"/"} className="text-white hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
            <Link to={"/bookgui"} className="text-white hover:text-gray-900">
                Booking Guide
            </Link>
            </li>
            <li>
            <Link to={"/info"} className="text-white hover:text-gray-900">
                Key Info
            </Link>
            </li>
            <li>
              <Link to={"/book"} className="text-white hover:text-gray-900">
                Book Flight
              </Link>
            </li>
            {isUserLoggedIn && (
              <li>
                <Link
                  to={"/bookings"}
                  className="text-white hover:text-gray-900"
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
