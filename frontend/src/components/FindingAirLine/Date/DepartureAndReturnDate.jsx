import React from "react";
import ChooseDateBox from "./ChooseDateBox";
class DepartureAndReturnDate extends React.Component{
    render(){

        const {formData, handleFormDataChange} = this.props;
        return (
            
            <div className="md:w-2/5 border-b-[2px] md:border-b-[0px] md:border-r-[2px] border-gray-300 px-5 pb-5 md:pt-5 flex flex-col justify-center">

            <ChooseDateBox title="Departure Date" name="departureDate" value={formData.departureDate} handleFormDataChange={handleFormDataChange}/>

            <ChooseDateBox title="Return Date" name="returnDate" value={formData.returnDate} handleFormDataChange={handleFormDataChange}/>
                
            </div>
           

        );
    }
}

export default DepartureAndReturnDate;