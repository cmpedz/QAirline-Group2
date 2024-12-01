const SuggestLocationForm = (props) =>{
    const {departLocation, code, airportName} = props;
    return(<div className="flex flex-row justify-between py-2 items-center">
        <div>
            <i className={`fa-solid fa-plane text-xl`}></i>
            
            <h1 className={`font-bold text-xl`}>{departLocation}</h1>
        </div>
        <div>
            <h1 className={`font-bold text-xl`}>{code}</h1>
            <p className={`text-gray-500 font-bold text-base`}>{airportName}</p>
        </div>
    </div>)
}
export default SuggestLocationForm