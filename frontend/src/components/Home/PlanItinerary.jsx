// PlanItinerary.jsx
import React from "react";
import styles from "./PlanItinerary.module.css"; // Import CSS module

const PlanItinerary = () => {
//   const cards = [
//     {
//       id: 1,
//       title: "Các chương trình ưu đãi hiện hành",
//       description: "Xem ưu đãi",
//       imageUrl:
//         "https://upload.wikimedia.org/wikipedia/commons/6/65/Tour_Eiffel_Wikimedia_Commons.jpg", // Replace with actual image URL
//     },
//     {
//       id: 2,
//       title: "Hướng dẫn nhập tên Tiếng Việt",
//       description: "Hướng dẫn khi nhập tên",
//       imageUrl:
//         "https://upload.wikimedia.org/wikipedia/commons/6/6f/Great_Wall_of_China_July_2006.JPG", // Replace with actual image URL
//     },
//     {
//       id: 3,
//       title: "Mua sớm - giá tốt",
//       description: "Đặt vé ngay",
//       imageUrl:
//         "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg", // Replace with actual image URL
//     },
//     {
//       id: 4,
//       title: "Ưu đãi vé một chiều",
//       description: "Xem thêm",
//       imageUrl:
//         "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sydney_Opera_House_Sails.jpg", // Replace with actual image URL
//     },
//   ];
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
  ];
  

  return (
    <div className={styles.container}>
      <h2 className="text-[35px] md:text-[50px] font-bold">Plan your journey</h2>
      <p className={styles.subtitle}>
      Some tips to start an amazing adventure with QAlines
      </p>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img
              src={card.imageUrl}
              alt={card.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanItinerary;
