
import AirLineClassDisplayForm from "./AirLineClassForm";

const AirLineClass = () =>{
    return (
        <div className="flex flex-row w-[40%]">
            <AirLineClassDisplayForm _class="Economy" color="gray" price="10"></AirLineClassDisplayForm>
            <AirLineClassDisplayForm _class="Business" color="yellow" price="1000"></AirLineClassDisplayForm>
        </div>
        
    )
}

export default AirLineClass;