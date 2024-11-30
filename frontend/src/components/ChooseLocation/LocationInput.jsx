import SuggestLocation from "./ChooseLocationSuggest";
import { useState, useEffect } from "react";

const LocationInput = (props) => {

    const {title, name, placeHolder, formData, value, handleFormDataChange, suggestions} = props;

    const [isFocused, setIsFocused] = useState(false);

    const [satisfiedLocation, setSatisfiedLocation] = useState(suggestions);

    const handleSuggestLocation = (e, suggestionLocations) => {

        const locationName = e.target.value.toLowerCase();

        console.log("check location key : " + locationName);

        setSatisfiedLocation(suggestionLocations.filter(location => location.toLowerCase().includes(locationName) ));

    }

    const handleFocus = () => {
        setIsFocused(true); 
        console.log("input loction is on focuse");
    }
    const handleBlur = () => {
        setIsFocused(false);
        console.log("input loction is on blur");
    }

    useEffect( () => {
        satisfiedLocation.map(location => {console.log(location)});

    }, [satisfiedLocation]) 

    return ( <div className="flex flex-col p-5  w-[40%] relative">
        <h1>{title}</h1>
        <input
          name={name}
          type="text"
          placeholder={placeHolder}
          value={value}
          className="outline-none text-[20px] md:text-[30px]"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            handleFormDataChange(e);
            handleSuggestLocation(e, suggestions);
        }}
        />

        <SuggestLocation satisfiedLocation = {satisfiedLocation} isFocused={isFocused}></SuggestLocation>

      </div>)

}

export default LocationInput;