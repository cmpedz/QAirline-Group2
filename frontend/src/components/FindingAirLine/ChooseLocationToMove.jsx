import React from "react";

class ChooseLocationToMove extends React.Component{

    render(){

        const {formData, handleFormDataChange} = this.props;
        return( 

        <div className="flex gap-5 xl:max-w-fit flex-col md:flex-row md:w-2/5 border-gray-300 border-b-[2px] md:border-r-[2px] md:border-b-[0px] md:items-center">

            <div className="flex flex-col p-5  w-[40%]">
              <h1>From</h1>
              <input
                name="from"
                type="text"
                placeholder="Delhi"
                value={formData.from}
                className="outline-none text-[20px] md:text-[30px]"
                onChange={handleFormDataChange}
              />
            </div>

            <div class="flex flex-rowh-[20px] pl-5 md:pl-0 cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div className="flex flex-col p-5  w-[40%]">
              <h1>To</h1>
              <input
                name="to"
                type="text"
                value={formData.to}
                placeholder="Mumbai"
                className="outline-none text-[20px] md:text-[30px]"
                onChange={handleFormDataChange}
              />
            </div>

        </div>

           
            
        
            )
    }
}

export default ChooseLocationToMove;