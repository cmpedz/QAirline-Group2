import React from "react";

const FlightDetailsDropDownMenu = (props) =>{
    return (
        <div className={`${props.expanded ? 'h-[100px]' : 'h-[0px]'}  w-[100%] bg-red-500 transition-all duration-300 ease-in-out `}
            style={{
                overflow: 'hidden',
            }}
            >
        </div>
    );
}

export default FlightDetailsDropDownMenu;