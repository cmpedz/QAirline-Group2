import AirLineClass from "./AirLineClass/AirLineClass";
import AirLineInfors from "./AirLineInfors/AirlineInfors"
import ClassServiceInfors from "./ClassServiceInfors";
import FlightDetailsDropDownMenu from "./FlightDetailsDropDownMenu";
import { useState, useEffect } from "react";

const AirLineDisplayForm = () => {
    const [flightsInforsExpanded, setFlightsInforsExpanded] = useState(false);
    const[classServiceInfors, setClassSerivceInfors] = useState(
        {
            isExpanded : false,
            classType: ""
        }
    )
    

    useEffect(()=>{
       if(classServiceInfors.isExpanded && flightsInforsExpanded){

         changeClassTypeInfors("isExpanded", false);

       }
    }, [flightsInforsExpanded]);

    useEffect(()=>{
        if(classServiceInfors.isExpanded && flightsInforsExpanded){
          setFlightsInforsExpanded(false);
        }
     }, [classServiceInfors.isExpanded]);
 
     const changeClassTypeInfors = (name, value)=>{
        setClassSerivceInfors((prevFormData) => ({
            ...prevFormData,
            [name] : value
          }));
     }
    

    return (
        <>
        
        
        <div className={`${flightsInforsExpanded ? 'rounded-tl-[10px] rounded-tr-[10px]' : 'rounded-[10px]'}  flex flex-row justify-between h-[150px] bg-gray-200 px-5 py-5 
        transition-all duration-300 ease-in-out`}>
            <AirLineInfors isExpanded = {flightsInforsExpanded} setExpanded={setFlightsInforsExpanded}></AirLineInfors>
            <AirLineClass isExpanded = {classServiceInfors.isExpanded} changeClassTypeInfors={changeClassTypeInfors}></AirLineClass>
        </div>
        
        <FlightDetailsDropDownMenu expanded = {flightsInforsExpanded}></FlightDetailsDropDownMenu>
        <ClassServiceInfors expanded = {classServiceInfors.isExpanded}></ClassServiceInfors>
        </>
        
    )
}

export default AirLineDisplayForm;