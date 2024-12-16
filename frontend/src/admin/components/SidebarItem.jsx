import React from "react";
import { Link } from "react-router-dom"; 

const SidebarItem = ({ href, imageSrc, text }) => {
  return (
    <Link to={href} className="hover:bg-blue-300 p-2 rounded flex items-center">
      {imageSrc && <img src={imageSrc} alt={text} className="w-5 h-5 mr-2" />}
      <span>{text}</span>
    </Link>
  );
};

export default SidebarItem;
