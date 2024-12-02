const SuggestLocationForm = (props) =>{
    const {departLocation, code, airportName, setIsFocused} = props;
    const onClickHandle = () => {
        console.log("suggest location is chosen");
        props.setLocation(departLocation);
        setIsFocused(false);
        
    }
    return(<div onClick={onClickHandle}
    className="flex flex-row justify-between items-center hover:bg-gray-300 w-[100%] cursor-pointer rounded-[10px]">
        <div className="pl-3">
            <i className={`fa-solid fa-plane text-xl`}></i>
            
            <h1 className={`font-bold text-xl`}>{departLocation}</h1>
        </div>
        <div className="pr-3">
            <h1 className={`font-bold text-xl`}>{code}</h1>
            <p className={`text-gray-500 font-bold text-base`}>{airportName}</p>
        </div>
    </div>)
}
export default SuggestLocationForm