import React, { useState } from "react";
import styles from "./PlanItinerary.module.css";

const PlanItinerary = () => {
  const cards = [
    {
      id: 1,
      title: "Current promotions",
      description: "View promotions",
      imageUrl: "..\\src\\assets\\images\\download0.jpg",
    },
    {
      id: 2,
      title: "Guide to entering Vietnamese names",
      description: "Instructions for entering names",
      imageUrl: "..\\src\\assets\\images\\download2.jpg",
    },
    {
      id: 3,
      title: "Book early – great prices",
      description: "Book now",
      imageUrl: "..\\src\\assets\\images\\download3.jpg",
    },
    {
      id: 4,
      title: "One-way ticket promotions",
      description: "Learn more",
      imageUrl: "..\\src\\assets\\images\\download4.jpg",
    },
    {
      id: 5,
      title: "Special holiday offers",
      description: "Check offers",
      imageUrl: "..\\src\\assets\\images\\download5.jpg",
    },
    {
      id: 6,
      title: "Last-minute deals",
      description: "Grab now",
      imageUrl: "..\\src\\assets\\images\\download6.jpg",
    },
    {
      id: 7,
      title: "Special holiday offers",
      description: "Check offers",
      imageUrl: "..\\src\\assets\\images\\download5.jpg",
    },
    {
      id: 8,
      title: "Last-minute deals",
      description: "Grab now",
      imageUrl: "..\\src\\assets\\images\\download6.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + cardsPerPage < cards.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className={styles.container}>
      <h2 className="text-[35px] md:text-[50px] font-bold text-[#00008B]">Plan your journey</h2>
      <p className={styles.subtitle}>Some tips to start an amazing adventure with QAlines</p>
      <div className={styles.cardContainer}>
        {visibleCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img src={card.imageUrl} alt={card.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button className="w-[45px] h-[45px] border-[1px] border-black flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-next" 
        onClick={handlePrev} disabled={currentIndex === 0} >
          &larr;
        </button>
        <button className="w-[45px] h-[45px] border-[1px] border-black flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-next"
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= cards.length}
          
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default PlanItinerary;
