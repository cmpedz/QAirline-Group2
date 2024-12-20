import React from "react";
import ChooseDateBox from "./ChooseDateBox";
class DepartureAndReturnDate1 extends React.Component{
    render(){

        const {formData, handleFormDataChange, isOneWayChosen} = this.props;
        return (
            
            <div className="flex flex-col xl:flex-row border-b-[2px] border-gray-300 px-5 py-5">

            <ChooseDateBox title="Departure Date" name="departureDate" value={formData.departureDate} handleFormDataChange={handleFormDataChange}/>

            { !isOneWayChosen && <ChooseDateBox title="Return Date" name="returnDate" value={formData.returnDate} handleFormDataChange={handleFormDataChange}/>}
                
            </div>
           

        );
    }
}

export default DepartureAndReturnDate1;