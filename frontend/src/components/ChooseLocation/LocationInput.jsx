import SuggestLocation from "./ChooseLocationSuggest";
import { useState, useEffect, useRef } from "react";
import SmallScreenSuggestLocation from "./SmallScreenSuggestLocation";

const LocationInput = (props) => {

    const {title, name, placeHolder, formData, handleFormDataChange, suggestions, isInSmallScreen} = props;

    const [isFocused, setIsFocused] = useState(false);

    const [satisfiedLocation, setSatisfiedLocation] = useState(suggestions);

    const suggestLocationBar = useRef();

    const handleSuggestLocation = (e, suggestionLocations) => {

        const locationName = e.target.value.toLowerCase();

        setSatisfiedLocation(suggestionLocations.filter(location => location.toLowerCase().includes(locationName) ));

    }

    const handleFocus = () => {
        setIsFocused(true); 
        console.log("check input Ref : " + inputRef);
        console.log("input loction is on focuse");
    }
    const handleBlur = () => {
        if(isInSmallScreen) return;
        setIsFocused(false);
        console.log("input loction is on blur");
    }

    useEffect( () => {
        
        satisfiedLocation.map(location => {console.log(location)});

    }, [satisfiedLocation])
    


      useEffect(()=>{
        if(isInSmallScreen){
              
            if(!document.body.classList.contains("overflow-hidden")){
              document.body.classList.add("overflow-hidden")
            }
      
          }else{
      
            if(document.body.classList.contains("overflow-hidden")){
              document.body.classList.remove("overflow-hidden")
            }
          }
      }, [props.isInSmallScreen])


    

    return ( <div className="flex flex-col p-5  w-[40%] relative">
        <h1>{title}</h1>
        <input
          name={name}
          type="text"
          placeholder={placeHolder}
          value={formData[name]}
          className="outline-none text-[20px] md:text-[30px]"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            handleFormDataChange(e);
            handleSuggestLocation(e, suggestions);
        }}
        />

        {isInSmallScreen ? 

        <SmallScreenSuggestLocation inputData = {props} satisfiedLocation = {satisfiedLocation} 
        handleSuggestLocation={handleSuggestLocation} inputLocation = {formData[name]}
        isFocused={isFocused} setIsFocused={setIsFocused}></SmallScreenSuggestLocation> : 

        <SuggestLocation satisfiedLocation = {satisfiedLocation} isFocused={isFocused} inputLocation = {formData[name]}></SuggestLocation>}

      </div>)

}

export default LocationInput;