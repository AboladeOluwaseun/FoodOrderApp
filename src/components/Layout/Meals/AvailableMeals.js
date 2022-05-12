import React from 'react';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const Meals = [
    {
      name: 'Hot Pizza',
      rating: '4.3',
      distance: '2.1km',
      id: '1',
      price: 125,
      formerprice: 125 / 2,
    },
    {
      name: 'Hot Amala',
      rating: '3.2',
      distance: '4.1km',
      id: '2',
      price: 300,
      formerprice: 300 / 2,
    },
    {
      name: 'Spaghetti',
      rating: '4.7',
      distance: '3.5km',
      id: '3',
      price: 400,
      formerprice: 400 / 2,
    },
    {
      name: 'Jollof Rice',
      rating: '5.0',
      distance: '1.5km',
      id: '4',
      price: 350,
      formerprice: 350 / 2,
    },
  ];

  const mealItem = Meals.map((meal) => {
    return (
      <MealItem
        name={meal.name}
        rating={meal.rating}
        distance={meal.distance}
        key={meal.id}
        price={meal.price}
        id={meal.id}
        formerprice={meal.formerprice}
      ></MealItem>
    );
  });

  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>{mealItem}</ul>
    </div>
  );
};

export default AvailableMeals;
