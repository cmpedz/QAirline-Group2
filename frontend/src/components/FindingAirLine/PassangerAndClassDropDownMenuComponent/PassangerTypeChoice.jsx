import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
class PassangerTypeChoice extends React.Component{
      render(){
        const {passengerType, age} = this.props;
        return (
            <div class="flex flex-row justify-between gap-5 w-[100%]">
                <div>
                    <h1>{passengerType}</h1>
                    <p class="text-gray-500 text-[12px]">{age}</p>
                </div>

                <div class="flex flex-row justify-between gap-2 items-center">

                    <i class="fa-regular fa-square-minus fa-2x"></i>
                    <p class="text-[30px]">0</p>
                    <i class="fa-regular fa-square-plus fa-2x"></i>

                </div>

            </div>
        );
      }
}

export default PassangerTypeChoice