import React from "react";

const FlightDetailsDropDownMenu = (props) =>{

    const {expanded, aircraftInfors, flightInfors} = props;

    const{from, to , departDate, arriveDate} = flightInfors;

    const formatedDate = (date, time) => {

        return time + " ," + date.split('-').reverse().join('-');
    }

    const formartedLocation = (location, airport) => {
        return location + " - " + airport;
    }

    const calcDuration = (departDate, arriveDate) => {

        const [departHour, departMinute] = departDate.time.split(":").map(Number);
    
        const [arriveHour, arriveMinute] = arriveDate.time.split(":").map(Number);
    
        let _departDate = new Date(departDate.date);
    
        let _arriveDate = new Date(arriveDate.date);
    
        let durationDateToHour = (_arriveDate - _departDate)/(1000 * 3600);
    
        const departTotalMinutes = departHour * 60 + departMinute;
        let arriveTotalMinutes = arriveHour * 60 + arriveMinute;
    
        if (arriveTotalMinutes < departTotalMinutes) {
    
          arriveTotalMinutes += 24 * 60;
    
          durationDateToHour -= 24;
        }
    
        
        let durationMinutes = arriveTotalMinutes - departTotalMinutes;
    
      
        const durationHour = durationDateToHour + Math.floor(durationMinutes / 60);
        const durationMinute = durationMinutes % 60;
    
        
        const formattedDuration = `${durationHour}h ${durationMinute}m`;
    
        return formattedDuration;
      };

    return (
        <div className={`${expanded ? 'h-auto px-2 py-2' : 'h-[0px]'}  w-[100%] bg-gray-200 transition-all duration-300 ease-in-out 
        `}
            style={{
                overflow: 'hidden',
            }}
            >
            <div className="text-[0.9rem] md:text-[1rem] ">Số hiệu chuyến bay : <b>{aircraftInfors.airline.airlineCode}</b></div>
            <br></br>
            <div className="flex flex-row gap-5">
                <div className="w-[10%] text-[0.9rem] md:text-[1rem]">Khởi hành : </div>
                <div className="w-[80%]">
                    <p className="font-bold text-[0.9rem] md:text-[1rem]">{formatedDate(departDate.date, departDate.time)}</p>
                    <p className="font-bold text-[0.9rem] md:text-[1rem]">{formartedLocation(from.nameLocation, from.airport)}</p>
                </div>
            </div>
            <br></br>
            <div className="flex flex-row gap-5">
                <div className="w-[10%] text-[0.9rem] md:text-[1rem]">Đến : </div>
                <div className="w-[80%]">
                <p className="font-bold text-[0.9rem] md:text-[1rem]">{formatedDate(arriveDate.date, arriveDate.time)}</p>
                <p className="font-bold text-[0.9rem] md:text-[1rem]">{formartedLocation(to.nameLocation, to.airport)}</p>
                </div>
            </div>

            <br></br>
            <div className="flex flex-row gap-5">
                <div className="w-[10%] text-[0.9rem] md:text-[1rem]"></div>
                <div className="w-[80%] flex flex-row gap-5">
                    <p>Thời gian: <span className="text-red-500 inline-block pl-2">{calcDuration(departDate, arriveDate)}</span></p>
                    <p>Airbus: <span className="text-red-500 inline-block pl-2">{aircraftInfors.airline.airlineManifacturing}</span></p>
                </div>
            </div>
        </div>
    );
}

export default FlightDetailsDropDownMenu;