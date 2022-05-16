import React from 'react';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem';
import amala from '../../../assets/MealSectionAssets/amala.jpg';
import pizza from '../../../assets/MealSectionAssets/pizza.jpg';
import Spaghetti from '../../../assets/MealSectionAssets/spagetti.jpg';
import Jollof2 from '../../../assets/MealSectionAssets/Jollof2.jpg';
import Chicken from '../../../assets/MealSectionAssets/Chicken.jpg';
import Burger from '../../../assets/MealSectionAssets/Burger.jpg';
import Eba from '../../../assets/MealSectionAssets/Eba.jpg';
import asun from '../../../assets/MealSectionAssets/asun.jpg';
import FriedRice from '../../../assets/MealSectionAssets/Fried Rice.jpg';
import Toast from '../../../assets/MealSectionAssets/Toast.jpg';
import icedcream from '../../../assets/MealSectionAssets/icedcream.jpg';
import iyan from '../../../assets/MealSectionAssets/Iyan.jpg';
import Popcorn from '../../../assets/MealSectionAssets/Popcorn.jpg';
import ofada from '../../../assets/MealSectionAssets/ofada.jpg';
import frenchfries from '../../../assets/MealSectionAssets/frenchfries.jpg';
import Rice from '../../../assets/MealSectionAssets/rice.jpg';

const AvailableMeals = () => {
  const Meals = [
    {
      name: 'Jollof Rice',
      rating: '5.0',
      distance: '1.5km',
      id: '1',
      price: 70,
      formerprice: 70 * 2,
      img: Jollof2,
    },

    {
      name: 'Full Chicken',
      rating: '5.0',
      distance: '1.5km',
      id: '2',
      price: 100,
      formerprice: 100 * 2,
      img: Chicken,
    },

    {
      name: 'Burger',
      rating: '5.0',
      distance: '1.5km',
      id: '3',
      price: 50,
      formerprice: 50 * 2,
      img: Burger,
    },

    {
      name: 'Asun',
      rating: '4.7',
      distance: '3.5km',
      id: '4',
      price: 40,
      formerprice: 40 * 2,
      img: asun,
    },

    {
      name: 'Eba',
      rating: '4.7',
      distance: '3.5km',
      id: '5',
      price: 80,
      formerprice: 80 * 2,
      img: Eba,
    },

    {
      name: 'Fried Rice',
      rating: '3.2',
      distance: '4.1km',
      id: '6',
      price: 30,
      formerprice: 30 * 2,
      img: FriedRice,
    },

    {
      name: 'Hot Amala',
      rating: '3.2',
      distance: '4.1km',
      id: '7',
      price: 20,
      formerprice: 20 * 2,
      img: amala,
    },

    {
      name: 'Toast',
      rating: '3.2',
      distance: '4.1km',
      id: '8',
      price: 40,
      formerprice: 40 * 2,
      img: Toast,
    },

    {
      name: 'Iced Cream',
      rating: '3.2',
      distance: '4.1km',
      id: '9',
      price: 35,
      formerprice: 35 * 2,
      img: icedcream,
    },

    {
      name: 'Iyan(Ponded Yam)',
      rating: '3.2',
      distance: '4.1km',
      id: '10',
      price: 20,
      formerprice: 20 * 2,
      img: iyan,
    },

    {
      name: 'Popcorn',
      rating: '3.2',
      distance: '4.1km',
      id: '11',
      price: 70,
      formerprice: 70 * 2,
      img: Popcorn,
    },

    {
      name: 'Ofada',
      rating: '3.2',
      distance: '4.1km',
      id: '12',
      price: 30,
      formerprice: 30 * 2,
      img: ofada,
    },

    {
      name: 'French Fries',
      rating: '3.2',
      distance: '4.1km',
      id: '13',
      price: 80,
      formerprice: 80 * 2,
      img: frenchfries,
    },

    {
      name: 'Pizza',
      rating: '3.2',
      distance: '4.1km',
      id: '14',
      price: 90,
      formerprice: 90 * 2,
      img: pizza,
    },

    {
      name: 'Spaghetti',
      rating: '3.2',
      distance: '4.1km',
      id: '15',
      price: 25,
      formerprice: 25 * 2,
      img: Spaghetti,
    },

    {
      name: 'Rice',
      rating: '3.2',
      distance: '4.1km',
      id: '16',
      price: 50,
      formerprice: 50 * 2,
      img: Rice,
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
        img={meal.img}
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
