import React from "react";
import SuggestLocation from "../ChooseLocation/ChooseLocationSuggest";
import LocationInput from "../ChooseLocation/LocationInput";

class ChooseLocationToMove extends React.Component{

    

    render(){

        const suggestLocations = ["Ha Noi", "Hai Phong", "Dong Van", "Ha Giang"];

        const {formData, handleFormDataChange, isInSmallScreen} = this.props;
        return( 

        <div className="flex gap-5 xl:max-w-fit flex-col md:flex-row md:w-[40%] border-gray-300 border-b-[2px] md:border-r-[2px] md:border-b-[0px] md:items-center">

            <LocationInput title = "From" name = "from" placeHolder = "from" formData = {formData}
            handleFormDataChange = {handleFormDataChange} suggestions = {suggestLocations} isInSmallScreen={isInSmallScreen}></LocationInput>
            
            

            <div class="flex flex-rowh-[20px] pl-5 md:pl-0 cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>

            <LocationInput title = "To" name = "to" placeHolder = "to" formData = {formData}
            handleFormDataChange = {handleFormDataChange} suggestions = {suggestLocations}
            isInSmallScreen={isInSmallScreen}></LocationInput>

        </div>

           
            
        
            )
    }
}

export default ChooseLocationToMove;