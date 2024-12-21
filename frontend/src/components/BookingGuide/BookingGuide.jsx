// BookingGuide.jsx
import React from "react";
import styles from "./BookingGuide.module.css"; // CSS Module

const BookingGuide = () => {
  return (
    <div className={styles.container }  >
      {/* Title Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Booking Guide</h1>
        <p className={styles.subtitle}>
          Follow these simple steps to book your flight with ease.
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.step}>
            <h2 className={styles.stepTitle}>Step 1: Enter Your Flight Details</h2>
            <p className={styles.stepDescription}>
             Select your departure and destination locations, travel dates, and the
             number of passengers. Then click on <strong>"Search Flights"</strong>.
            </p>
            <img
                src="https://cdn.pixabay.com/photo/2016/06/27/05/39/airplane-1480049_960_720.jpg"
                alt="Enter Flight Details"
                className={styles.stepImage}
            />
        </div>

        {/* Step 2 */}
        <div className={styles.step}>
         <h2 className={styles.stepTitle}>Step 2: Choose Your Flight</h2>
         <p className={styles.stepDescription}>
          Browse through the available flights and select the one that best
          suits your schedule and budget. Click <strong>"Select"</strong> to
          proceed.
         </p>
         <img
           src="https://cdn.pixabay.com/photo/2017/03/27/14/56/aircraft-2179207_960_720.jpg"
           alt="Choose Flight"
           className={styles.stepImage}
         />
        </div>

      {/* Step 3 */}
      <div className={styles.step}>
        <h2 className={styles.stepTitle}>Step 3: Enter Passenger Information</h2>
        <p className={styles.stepDescription}>
          Fill in the passenger's personal details as per their official ID.
          Ensure accuracy to avoid issues during check-in.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/02/01/01/airplane-2561678_960_720.jpg"
          alt="Enter Passenger Information"
          className={styles.stepImage}
        />
      </div>

      {/* Step 4 */}
      <div className={styles.step}>
        <h2 className={styles.stepTitle}>Step 4: Review and Confirm</h2>
        <p className={styles.stepDescription}>
          Double-check all the information you entered. If everything is
          correct, proceed to payment by clicking <strong>"Confirm Booking"</strong>.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/20/01/airplane-1284721_960_720.jpg"
          alt="Review and Confirm"
          className={styles.stepImage}
        />
      </div>
      </div>
    </div>
  );
};

export default BookingGuide;
