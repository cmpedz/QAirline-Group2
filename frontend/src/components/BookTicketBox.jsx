import React, { useState, useEffect } from "react";
import FindingAirLineBar from "./FindingAirLine/FindingAirLineBar";

const BookTicketBox = ({
  formData,
  handleFormDataChange,
  handleFlightSearch,
}) => {
  const [isInSmallScreen, setIsInSmallScreen] = useState(
    window.innerWidth < 768 ? true : false
  );


    // const [isInSmallScreen, setIsInSmallScreen] = useState(window.innerWidth < 768 ? true : false);
    
    // useEffect(() => {
    //     const handleResize = () => {
    //         console.log("window is resized");
    //     if(window.innerWidth < 768){
    //         setIsInSmallScreen(true);
    //         console.log("apporoach small screen, isSmallScreen : " + isInSmallScreen);
            
    //     } else{
    //         setIsInSmallScreen(false);
            
    //     }
        
  const [isOneWayChosen, setIsOneWayChosen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsInSmallScreen(true);
      } else {
        setIsInSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleRadioChange = (e) => {
    if (e.target.value === "oneWay") {
      setIsOneWayChosen(true);
    } else {
      setIsOneWayChosen(false);
    }
  };

  return (
    <div
  className="relative w-full h-screen bg-cover bg-center"
  style={{
    // Đặt chiều rộng 100% viewport
    width: "100%",
    height: "100vh", // Đảm bảo chiếm toàn bộ chiều cao màn hình
    backgroundImage: `url('src/assets/images/Mb1.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "25px", // Nếu cần bo góc, đặt giá trị cụ thể (ví dụ: 10px)
  }}
>
  {/* Tiêu đề "Book Flight" */}
  <div
    className="text-center mt-4 mb-10"
    style={{
      marginTop: "1.5rem", // Tăng khoảng cách phía trên
      marginBottom: "3rem", // Tăng khoảng cách phía dưới
    }}
  >
    <h1 className="text-white text-5xl font-bold">Book Flight</h1>
  </div>



{/* 
    // <div className="py-[50px] mx-auto px-5 border-[2px] rounded-[10px] border-black-700 h-[42rem] md:h-[20rem] flex md:flex flex-col ">

    //   <div className="flex flex-col ">
    //     <div className="flex gap-5 items-center justify-start mb-5">
    //       <div className="flex justify-center items-center gap-2">
    //         <input type="radio" name="ticketType" id="oneWay" defaultChecked class="h-[1rem] w-[1rem]"/>
    //         <label htmlFor="oneWay">One way</label>
    //       </div>
    //       <div className="flex justify-center items-center gap-2">
    //         <input type="radio" name="ticketType" id="return" defaultChecked class="h-[1rem] w-[1rem]"/>
    //         <label htmlFor="return">Return</label>
    //       </div>
    //     </div>

        
    //     <FindingAirLineBar formData = {formData} handleFormDataChange = {handleFormDataChange} isInSmallScreen={isInSmallScreen}/> */}
        
  {/* Hộp đặt vé */}
  <div
    className="py-[50px] mx-auto px-5 border-[2px] rounded-[10px] border-black-700"
    style={{
      maxWidth: "1000px", // Giới hạn chiều rộng cho hộp đặt vé
      backgroundColor: "rgba(231, 215, 215, 0.296)", // Màu nền trắng trong suốt
    }}
  >
    <div className="flex flex-col">
      <div className="flex gap-5 items-center justify-start mb-5">
        <div className="flex justify-center items-center gap-2">
          <input
            type="radio"
            name="ticketType"
            value="oneWay"
            className="h-[1rem] w-[1rem]"
          />
          <label htmlFor="oneWay">One way</label>
        </div>

        <div className="flex justify-center items-center gap-2">
          <input
            type="radio"
            name="ticketType"
            value="return"
            defaultChecked
            className="h-[1rem] w-[1rem]"
          />
          <label htmlFor="return">Return</label>
        </div>
      </div>

      <FindingAirLineBar
        formData={formData}
        handleFormDataChange={handleFormDataChange}
        isInSmallScreen={isInSmallScreen}
        setFormData={setFormData}
        isOneWayChosen={isOneWayChosen}
      />
    </div>
    <button
      className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-5 py-2 mt-5 rounded-lg transition duration-100 w-[200px] self-center md:self-end"
      onClick={handleFlightSearch}
    >
      Search Flights
    </button>
  </div>
</div>
  );
};

export default BookTicketBox;
