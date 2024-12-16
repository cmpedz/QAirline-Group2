import React from "react";

const ClassServiceInfors = (props) =>{
    return (
        <div className={`${props.expanded ? 'h-[100px]' : 'h-[0px]'}  w-[100%] bg-yellow-500 transition-all duration-300 ease-in-out `}
            style={{
                overflow: 'hidden',
            }}
            >
                <div>
                    <p>Bao gồm :</p>

                </div>

                <div>
                    <p>Chưa bao gồm :</p>
                    
                </div>
        </div>
    );
}

export default ClassServiceInfors;