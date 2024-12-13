import React from "react";

const SidebarItem = ({ href, imageSrc, text }) => {
  return (
    <a href={href} className="hover:bg-blue-300 p-2 rounded flex items-center">
      {imageSrc && <img src={imageSrc} alt={text} className="w-5 h-5 mr-2" />}
      <span>{text}</span>
    </a>
  );
};

export default SidebarItem;
