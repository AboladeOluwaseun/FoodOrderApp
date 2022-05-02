import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsFilterSearch from './MealsFilterSearch';
import styles from './Meals.module.css';

const MealSection = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <MealsFilterSearch
          classname={styles['meal-section']}
        ></MealsFilterSearch>
        <AvailableMeals></AvailableMeals>
      </div>
    </React.Fragment>
  );
};

export default MealSection;
