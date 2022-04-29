import React from 'react';
import styles from './Display.module.css';
import mealsImage from '../../../assets/DisplayAssets/displayimg3.jpg';
import mealsImage2 from '../../../assets/DisplayAssets/displayimage2.jpg';
import mealsImage4 from '../../../assets/DisplayAssets/mealsdisplayimg5.jpg';

const DisplaySection = () => {
  return (
    <div className={`${styles['main-image']} ${styles.wrapper}`}>
      <img
        className={`${styles['main-image-img']} ${styles.top}`}
        src={mealsImage}
        alt=" A table of Food"
      />
      <img
        className={`${styles['main-image-img']} ${styles.bottom}`}
        src={mealsImage2}
        alt=" A table of Food"
      />
      <img
        className={`${styles['main-image-img']} ${styles.bottom2}`}
        src={mealsImage4}
        alt=" A table of Food"
      />

      <p className={styles['display-Text']}>
        Get Your <span className={styles['display-Text-span']}>Food</span>{' '}
        Delivered <br></br>
        To You Healthy,Safe <br></br>
        And Fast <br></br>
      </p>
      <button className={styles.button}>Order Now</button>
    </div>
  );
};

export default DisplaySection;
