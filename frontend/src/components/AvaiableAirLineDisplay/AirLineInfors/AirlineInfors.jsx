import AirLineInforsIcon from "./AirLineIcon/AirlineInforsIcon"
import AirLineInforsDetails from "./AirlineInforsDetail"

const AirLineInfors = (props) =>{
    return (
        <div className="flex flex-col justify-between">
            <AirLineInforsIcon></AirLineInforsIcon>
            <AirLineInforsDetails setExpanded={props.setExpanded}
            isExpanded = {props.isExpanded}></AirLineInforsDetails>
        </div>
    )
}

export default AirLineInfors;