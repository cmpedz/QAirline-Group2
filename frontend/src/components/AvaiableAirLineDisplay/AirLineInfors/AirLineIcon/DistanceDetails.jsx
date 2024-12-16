
const DistanceDetails = (props) => {

    const quantitiesStop = props.quantitiesStop + " stop";

    return (
        <div className="w-40%">
            <div div className="flex flex-row items-center">

            <svg width="100%" height="10">
                <line x1="0" y1="5" x2="90%" y2="5" stroke="black" stroke-width="1" />
            </svg>

                <div className="flex flex-row">
                    <p>bay thẳng</p>
                    
                </div>

                <svg width="100%" height="10">
                    <line x1="10%" y1="5" x2="100%" y2="5" stroke="black" stroke-width="1" />
                </svg>

            </div>

            {/* <div className="text-center">
                <p>{quantitiesStop}</p>
            </div> */}
        </div>
    );
}

export default DistanceDetails;