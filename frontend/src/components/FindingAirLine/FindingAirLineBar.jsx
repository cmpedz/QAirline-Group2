import React from "react";
import PassengerAndClassChoice from "./PassangerAndClassChoice";
import ChooseLocationToMove from "./ChooseLocationToMove";

import DepartureAndReturnDate from "./Date/DepartureAndReturnDate";

class FindingAirLineBar extends React.Component{


    render() {
        const { formData, handleFormDataChange, isInSmallScreen } = this.props;

        const disableScrollbarOfWindow = (props) => {

          if(props.isInSmallScreen && props.isDropdownVisible){
                
            if(!document.body.classList.contains("overflow-hidden")){
              document.body.classList.add("overflow-hidden")
            }
      
          }else{
      
            if(document.body.classList.contains("overflow-hidden")){
              document.body.classList.remove("overflow-hidden")
            }
          }
        }
      

        return ( 

          <div className="flex flex-col md:flex-row w-[100%] border-[1px] rounded-[10px] md:h-[150px]">

          <ChooseLocationToMove formData = {formData} handleFormDataChange = {handleFormDataChange} isInSmallScreen={isInSmallScreen}
          disableScrollbarOfWindow = {disableScrollbarOfWindow}/>
            
          <DepartureAndReturnDate formData = {formData} handleFormDataChange = {handleFormDataChange}/>
           
           <PassengerAndClassChoice handleFormDataChange = {handleFormDataChange} isInSmallScreen={isInSmallScreen}
           disableScrollbarOfWindow = {disableScrollbarOfWindow}/>

          </div>
        
        )

    }
}

export default FindingAirLineBar;