import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ href, Icon, text }) => {
  return (
    <Link to={href} className="hover:bg-blue-300 p-2 rounded flex items-center space-x-2">
      {Icon && <Icon className="text-xl" />} {/* Hiển thị Icon nếu tồn tại */}
      <span>{text}</span>
    </Link>
  );
};

export default SidebarItem;
