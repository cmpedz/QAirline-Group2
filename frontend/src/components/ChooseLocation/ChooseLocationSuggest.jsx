
import SuggestLocationForm from "./SuggestLocationForm";
import { forwardRef } from "react";

const SuggestLocation = forwardRef((props) => {

    return (

        <div className={`absolute z-50 px-2 py-1 top-[70px] md:top-[90px] h-[100px]  md:h-[200px] md:w-[300px] w-[200px] bg-white overflow-y-scroll border-[1px] 
            ${
            props.isFocused ? "" : "hidden"
          } shadow-md`} >
            {props.satisfiedLocation.map((location, index) => (
                <SuggestLocationForm departLocation = {location} code={"code"} airportName = "airportName" key={index}
                inputLocation = {props.inputLocation}  setIsFocused = {props.setIsFocused} ></SuggestLocationForm>
            ))}
        </div>
    );

    
    
})

export default SuggestLocation;

