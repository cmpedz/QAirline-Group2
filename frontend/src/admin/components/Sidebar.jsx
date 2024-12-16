import React from "react";
import SidebarItem from "./SidebarItem.jsx";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-blue-500 text-white flex flex-col rounded-xl overflow-hidden shadow-2xl">
        <div className="p-4 font-bold text-lg">MCH</div>
        <nav className="flex flex-col space-y-2 px-4">
            <SidebarItem href="/admin" imageSrc="\src\assets\images\admin\home.png" text="Home" />
            <SidebarItem href="/admin/flights" imageSrc="\src\assets\images\admin\flight.png" text="Manage Flights" />
            <SidebarItem href="/admin/bookings" imageSrc="\src\assets\images\admin\booking.png" text="Manage Bookings" />
            <SidebarItem href="/admin/aircrafts" imageSrc="\src\assets\images\admin\airplane.png" text="Manage Aircrafts" />
            <SidebarItem href="/admin/airports" imageSrc="\src\assets\images\admin\airpot.png" text="Manage Airport" />
            <SidebarItem href="/admin/promotions" imageSrc="\src\assets\images\admin\shopping-online.png" text="Promotions" />
            <SidebarItem href="#" imageSrc="\src\assets\images\admin\logout.png" text="Logout" />
        </nav>
      </aside>
    );
}

export default Sidebar