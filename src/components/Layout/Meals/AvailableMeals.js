import React from 'react';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        <li>
          <MealItem></MealItem>
        </li>
        <li>
          <MealItem></MealItem>
        </li>
        <li>
          <MealItem></MealItem>
        </li>
        <li>
          <MealItem></MealItem>
        </li>
      </ul>
    </div>
  );
};

export default AvailableMeals;
