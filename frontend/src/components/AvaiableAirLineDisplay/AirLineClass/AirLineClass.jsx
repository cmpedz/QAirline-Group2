
import AirLineClassDisplayForm from "./AirLineClassForm";

const AirLineClass = (props) =>{
    return (
        <div className="flex flex-row w-[40%]">

            <AirLineClassDisplayForm _class="Economy" color="gray" price="10"
            changeClassTypeInfors={props.changeClassTypeInfors}
            ></AirLineClassDisplayForm>

            <AirLineClassDisplayForm _class="Business" color="yellow" price="1000"
            changeClassTypeInfors={props.changeClassTypeInfors}
            ></AirLineClassDisplayForm>

        </div>
        
    )
}

export default AirLineClass;