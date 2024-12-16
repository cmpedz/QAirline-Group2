import React from "react";
import SuggestLocation from "../ChooseLocation/ChooseLocationSuggest";
import LocationInput from "../ChooseLocation/LocationInput";

class ChooseLocationToMove extends React.Component{

    

    render(){

        const suggestLocations = ["Hà Nội", "Hai Phong", "Dong Van", "Ha Giang"];

        const {formData, handleFormDataChange, isInSmallScreen, setFormData} = this.props;

        const swapData = () =>{
            console.log("swap data")
            let from = formData["from"];
            let to = formData["to"];
            setFormData((prevFormData) => ({
                ...prevFormData,
                ["from"]: to,
                ["to"]: from,
            }));
        }

        return( 

        <div className="flex gap-5 xl:max-w-fit flex-col md:flex-row md:w-[40%] border-gray-300 border-b-[2px] md:border-r-[2px] md:border-b-[0px] md:items-center">

            <LocationInput title = "From" name = "from" placeHolder = "from" formData = {formData}
            handleFormDataChange = {handleFormDataChange} suggestions = {suggestLocations} isInSmallScreen={isInSmallScreen}
            setFormData = {setFormData}></LocationInput>
            
            

            <div class="flex flex-rowh-[20px] pl-5 md:pl-0 cursor-pointer"
            onClick = {swapData}>
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>

            <LocationInput title = "To" name = "to" placeHolder = "to" formData = {formData}
            handleFormDataChange = {handleFormDataChange} suggestions = {suggestLocations}
            setFormData = {setFormData}
            isInSmallScreen={isInSmallScreen}></LocationInput>

        </div>

           
            
        
            )
    }
}

export default ChooseLocationToMove;