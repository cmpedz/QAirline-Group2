const AirLineInforsDetails = (props) => {
    return (
        <p className="cursor-pointer font-bold underline hover:text-yellow-500
        transition-all duration-300 ease-in-out text-ms" 
        onClick={()=>{props.setExpanded(!props.isExpanded)}}>Flight details</p>
    )
}

export default AirLineInforsDetails;