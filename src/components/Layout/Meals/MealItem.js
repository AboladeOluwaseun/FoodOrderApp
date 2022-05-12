import React, { useState } from 'react';
import ProductDetail from '../../UI/ProductDetail';
import pizzaImage from '../../../assets/MealSectionAssets/pizza.jpg';
import styles from './MealItem.module.css';
import star from '../../../assets/MealSectionAssets/starIcon.svg';
import location from '../../../assets/MealSectionAssets/location.png';
import dollarSign from '../../../assets/MealSectionAssets/dollarsymbol.png';

const MealItem = (props) => {
  const [display, setDisplay] = useState();
  const { name, price, formerprice, id } = props;

  const onClickHandler = (e) => {
    setDisplay(true);
    console.log('this is working');
  };

  const closeProductDetailHandler = (e) => {
    setDisplay(null);
    console.log('this is working');
  };

  return (
    <React.Fragment>
      {display && (
        <ProductDetail
          name={name}
          price={price}
          formerprice={formerprice}
          id={id}
          cancelDisplay={closeProductDetailHandler}
          onClick={onClickHandler}
        ></ProductDetail>
      )}
      <li className={styles.li}>
        <div className={styles['meal-item-div']} onClick={onClickHandler}>
          <img className={styles['meal-item-img']} src={pizzaImage} alt="" />
          <div className={styles['meal-item-description']}>
            <p className={styles['food-name']}>{props.name}</p>
            <p className={styles['food-rating']}>
              <span>
                <img
                  className={styles['rating-star']}
                  src={star}
                  alt="rating-star"
                />
              </span>
              {props.rating}
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
                {props.distance}
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
      </li>
    </React.Fragment>
  );
};

export default MealItem;
