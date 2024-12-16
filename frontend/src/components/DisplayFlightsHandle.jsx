import { getClassTypeInfors } from "../../../backend/controller/classTypeInforsController.js";
import AirLineDisplayForm from "./AvaiableAirLineDisplay/AirlineDisplayForm";
import { useEffect } from "react";
const SuitableFlights = (props) => {

  const {searchedFlights, searchStatus} = props;
  const flightDetails = {
       
  }

  useEffect(()=>{
    getClassTypeInfors();
  }, []);

    console.log("check flights length : " + searchedFlights.length);
    return(
      <>
      <p className="py-5">
      <p>{searchStatus}</p>
    </p>
    <AirLineDisplayForm></AirLineDisplayForm>
    {searchedFlights.length > 0 ? (
      <div className="flex justify-center items-center gap-5 flex-wrap w-full">
        {searchedFlights.map((flight, index) => {
          console.log(flight);
        }
          
        )}
      </div>
    ) : null}
      </>
      
    )
}


export default SuitableFlights;