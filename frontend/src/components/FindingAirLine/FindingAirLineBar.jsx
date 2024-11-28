import React from "react";
import PassengerAndClassChoice from "./PassangerAndClassChoice";
import ChooseLocationToMove from "./ChooseLocationToMove";

import DepartureAndReturnDate from "./Date/DepartureAndReturnDate";

class FindingAirLineBar extends React.Component{


    render() {
        const { formData, handleFormDataChange } = this.props;


        return ( 

          <div className="flex justify-between gap-5 flex-col md:flex-row w-[100%] border-[1px] rounded-[10px] md:h-[150px]">

          <ChooseLocationToMove formData = {formData} handleFormDataChange = {handleFormDataChange}/>
            
          <DepartureAndReturnDate formData = {formData} handleFormDataChange = {handleFormDataChange}/>
           
           <PassengerAndClassChoice handleFormDataChange = {handleFormDataChange}/>

          </div>
        
        )

    }
}

export default FindingAirLineBar;