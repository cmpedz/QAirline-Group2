import React from "react";
import SuggestLocation from "../ChooseLocation/ChooseLocationSuggest";

class ChooseLocationToMove extends React.Component{

    suggestLocations = ["Ha Noi", "Hai Phong", "Dong Van", "Ha Giang"];

    render(){

        const {formData, handleFormDataChange} = this.props;
        return( 

        <div className="flex gap-5 xl:max-w-fit flex-col md:flex-row md:w-[40%] border-gray-300 border-b-[2px] md:border-r-[2px] md:border-b-[0px] md:items-center">

            <div className="flex flex-col p-5  w-[40%]">
              <h1>From</h1>
              <input
                name="from"
                type="text"
                placeholder="Delhi"
                value={formData.from}
                className="outline-none text-[20px] md:text-[30px]"
                onChange={(e) => {handleFormDataChange(e); SuggestLocation(e, this.suggestLocations)}}
              />
            </div>

            <div class="flex flex-rowh-[20px] pl-5 md:pl-0 cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div className="flex flex-col p-5  w-[40%]">
              <h1>To</h1>
              <input
                name="to"
                type="text"
                value={formData.to}
                placeholder="Mumbai"
                className="outline-none text-[20px] md:text-[30px]"
                onChange={(e) => {handleFormDataChange(e); SuggestLocation(e, this.suggestLocations)}}
              />
            </div>

        </div>

           
            
        
            )
    }
}

export default ChooseLocationToMove;