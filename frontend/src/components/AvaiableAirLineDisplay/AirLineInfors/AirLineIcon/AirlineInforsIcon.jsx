import DistanceDetails from "./DistanceDetails";
import LocationDetails from "./LocationDetails";

const AirLineInforsIcon = () => {
        return (
            <div className="flex flex-row items-center w-[100%]">
                <LocationDetails time= "2/9/2024" airportName = "HN"></LocationDetails>
                <DistanceDetails quantitiesStop="2"></DistanceDetails>
                <LocationDetails time= "2/9/2024" airportName = "HN"></LocationDetails>
            </div>
        )
}

export default AirLineInforsIcon;