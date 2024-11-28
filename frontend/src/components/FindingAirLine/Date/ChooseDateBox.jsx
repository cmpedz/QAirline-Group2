import React from "react";
function ChooseDateBox({title, name, formData, handleFormDataChange}){
    
    return (
        
            <div className="flex flex-col h-[50%] ">
              <h1>{title}</h1>
              <input
                name={name}
                type="date"
                value={formData.departDate}
                className="outline-none text-[20px] w-full text-gray-400"
                onChange={handleFormDataChange}
              />
            </div>
          
    );
}
export default ChooseDateBox;