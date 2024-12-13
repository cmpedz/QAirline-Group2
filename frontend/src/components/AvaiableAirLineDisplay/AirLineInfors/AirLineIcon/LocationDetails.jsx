const LocationDetails = (props) => {
    return(
        <div className="w-30% px-2">
            <p className=" font-bold text-lg md:text-2xl md:font-normal">{props.time}</p>
            <p>{props.airportName}</p>
        </div>
    )
}

export default LocationDetails;