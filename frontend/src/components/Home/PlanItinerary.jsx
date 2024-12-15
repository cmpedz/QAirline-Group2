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
      title: "Các chương trình ưu đãi hiện hành",
      description: "Xem ưu đãi",
      imageUrl: "https://cdn.pixabay.com/photo/2015/09/18/23/11/eiffel-tower-949672_960_720.jpg",
    },
    {
      id: 2,
      title: "Hướng dẫn nhập tên Tiếng Việt",
      description: "Hướng dẫn khi nhập tên",
      imageUrl: "https://cdn.pixabay.com/photo/2017/01/14/10/56/china-1974666_960_720.jpg",
    },
    {
      id: 3,
      title: "Mua sớm - giá tốt",
      description: "Đặt vé ngay",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/14/04/02/statue-of-liberty-1822635_960_720.jpg",
    },
    {
      id: 4,
      title: "Ưu đãi vé một chiều",
      description: "Xem thêm",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/11/09/03/sydney-opera-house-1584903_960_720.jpg",
    },
  ];
  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lên kế hoạch hành trình</h2>
      <p className={styles.subtitle}>
        Một số gợi ý để bắt đầu một hành trình tuyệt vời cùng MCH Airways
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
