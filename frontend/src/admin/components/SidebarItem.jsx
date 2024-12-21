import React from "react";
import { Link } from "react-router-dom"; 

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.setItem("isAdmin", false);
  window.location.reload();
};

const SidebarItem = ({ href, imageSrc, text }) => {
  return (
    <Link to={href} className="hover:bg-blue-300 p-2 rounded flex items-center"
    onClick={(e) => {
      if(text == "Logout"){
        e.preventDefault()
        handleLogout();
        setTimeout(() => {
          navigate("/");
        }, 200);
      }
    }}>
      {imageSrc && <img src={imageSrc} alt={text} className="w-5 h-5 mr-2" />}
      <span>{text}</span>
    </Link>
  );
};

export default SidebarItem;
