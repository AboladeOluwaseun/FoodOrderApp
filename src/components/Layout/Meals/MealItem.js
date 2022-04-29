import React from 'react';
import pizzaImage from '../../../assets/MealSectionAssets/pizza.jpg';
import styles from './MealItem.module.css';
import star from '../../../assets/MealSectionAssets/starIcon.svg';
import location from '../../../assets/MealSectionAssets/location.png';
import dollarSign from '../../../assets/MealSectionAssets/dollarsymbol.png';

const MealItem = () => {
  return (
    <React.Fragment>
      <div className={styles['meal-item-div']}>
        <img className={styles['meal-item-img']} src={pizzaImage} alt="" />
        <div className={styles['meal-item-description']}>
          <p className={styles['food-name']}>Hot Pizza</p>
          <p className={styles['food-rating']}>
            <span>
              <img
                className={styles['rating-star']}
                src={star}
                alt="rating-star"
              />
            </span>
            4.7
          </p>
          <div className={styles['delivery-details']}>
            <p>
              <span>
                <img
                  className={styles['location-icon']}
                  src={location}
                  alt="location-icon"
                />
              </span>
              2.4KM
            </p>
            <p className={styles['delivery-type']}>
              <span>
                <img
                  className={styles['dollar-icon']}
                  src={dollarSign}
                  alt="dollar-sign"
                />
              </span>
              Free Delivery
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MealItem;
