import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsFilterSearch from './MealsFilterSearch';
import styles from './Meals.module.css';

const MealSection = () => {
  return (
    <React.Fragment>
      <MealsFilterSearch classname={styles['meal-section']}></MealsFilterSearch>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
};

export default MealSection;
