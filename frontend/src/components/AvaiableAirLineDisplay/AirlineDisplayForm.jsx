import AirLineClass from "./AirLineClass/AirLineClass";
import AirLineInfors from "./AirLineInfors/AirlineInfors"
import { useState, useEffect } from "react";

const AirLineDisplayForm = () => {
    const [expanded, setExpanded] = useState(false);


    useEffect(()=>{
        console.log("check is expanded airlineinfors :" + expanded);
    }, [expanded]);

    return (
        <>
        
        
        <div className={`${expanded ? 'rounded-tl-[10px] rounded-tr-[10px]' : 'rounded-[10px]'}  flex flex-row justify-between h-[150px] bg-gray-200 px-5 py-5 
        transition-all duration-300 ease-in-out`}>
            <AirLineInfors isExpanded = {expanded} setExpanded={setExpanded}></AirLineInfors>
            <AirLineClass></AirLineClass>
        </div>
        
        
        <div className={`${expanded ? 'h-[100px]' : 'h-[0px]'}  w-[100%] bg-red-500 transition-all duration-300 ease-in-out `}
            style={{
                overflow: 'hidden',
            }}
            >
        </div>
        </>
        
    )
}

export default AirLineDisplayForm;