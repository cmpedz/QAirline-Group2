import React, { useEffect, useRef, useState } from "react";
import AirplaneHead from "../../assets/images/airplaneHead.png";

import { toast } from "react-toastify";

const SeatReservation = ({
  setCurrentActiveForm,
  numberOfPassengers,
  setNumberOfPassengers,
  selectedSeats,
  setSelectedSeats,
  avaiableSeats
}) => {

  const maxCols = 8;

  let currentSeats = {
    A1: ["A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1","A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1",
      "A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1","A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1"
    ],
    B1: [8, 7, 6, 5, 4, 3, 2, 1],
    
  };

  let reservedSeats = [];

  const [bookedSeats, setBookedSeats] = useState(reservedSeats);

  const handleAvaiableFlights = () => {
      let rowIndex = 0;
      let colIndex = 0;
      avaiableSeats.map((classType) => {
        console.log("check avaiable seats " + classType.classType + " : "  + JSON.stringify(classType.seats));  
      })
  }

  const handleNextClick = () => {
    if (numberOfPassengers === 0) {
      toast.warn("Please select atleast one seat to proceed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      setCurrentActiveForm(1);
    }
  };

  const handleSeatClick = (row, seat) => {
    if (!bookedSeats.includes(row + seat)) {
      if (selectedSeats[row] && selectedSeats[row].includes(seat)) {
        setSelectedSeats({
          ...selectedSeats,
          [row]: selectedSeats[row].filter((s) => s !== seat),
        });
      } else {
        setSelectedSeats({
          ...selectedSeats,
          [row]: [...(selectedSeats[row] || []), seat],
        });
      }
    }
  };

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {

    handleAvaiableFlights();

    const updateContainerSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerSize({ width: clientWidth, height: clientHeight });
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      const { width, height } = containerSize;
      if (width && height) {
        if (width >= 768) {
          imageRef.current.style.width = `${width}px`;
          imageRef.current.style.height = "auto";
        } else {
          imageRef.current.style.width = "auto";
          imageRef.current.style.height = `${height}px`;
        }
      }
    }
  }, [containerSize]);

  useEffect(() => {
    // Calculate total number of selected seats and update numberOfPassengers prop
    let totalSelectedSeats = 0;
    for (const row in selectedSeats) {
      totalSelectedSeats += selectedSeats[row].length;
    }
    setNumberOfPassengers(totalSelectedSeats);
  }, [selectedSeats, setNumberOfPassengers]);

  const renderSeats = (row) => {
    return currentSeats[row].map((seat) => (
      <div
        key={seat}
        className={`seatContainer ${
          selectedSeats[row] && selectedSeats[row].includes(seat)
            ? "selectedSeats"
            : bookedSeats.includes(row + seat)
            ? "bookedSeats"
            : "seatsHover"
        } w-[50px] md:w-[80px] md:h-[80px]`}
        onClick={() => handleSeatClick(row, seat)}
      >
        <p className="text-[15px] ">
          {row}
          {seat}
        </p>
      </div>
    ));
  };

  const numPassengersText =
    Object.values(selectedSeats).reduce(
      (total, seats) => total + seats.length,
      0
    ) + " Passenger(s)";

  return (
    <div className="my-5 bg-white border-[1px] border-gray-200 rounded-[30px] p-5">
      <p className="mb-5 text-4xl">Seat Booking</p>
      <p className="mb-2">{numPassengersText}</p>
      <div className="flex flex-col  mt-5">

      <div className="w-[100%] md:block">
          <img
            ref={imageRef}
            src={AirplaneHead}
            alt=""
            className="w-[100%] md:block"
          />
        </div>

        <div
          ref={containerRef}
          className="flex flex-col gap-20 h-fit p-5 bg-[#f3f5f8] rounded-b-[15px] md:rounded-s-[15px] md:w-auto"
        >
          {Object.keys(currentSeats).map((row) => (
            <div key={row} className="flex flex-row  flex-wrap gap-1  justify-center w-[100%]">
              {renderSeats(row)}
            </div>
          ))}
        </div>


      </div>
      <button
        className="bg-blue-300 text-white px-10 py-2 rounded-full hover:bg-blue-500 duration-300 mt-2"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default SeatReservation;
