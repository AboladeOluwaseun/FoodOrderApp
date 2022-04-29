import React from 'react';
import styles from '../../Layout/Meals/MealsFilterSearch.module.css';
import search from '../../../assets/MealSectionAssets/search.svg';
import filter from '../../../assets/MealSectionAssets/setting.png';
const MealsFilterSearch = () => {
  return (
    <>
      <div className={`${styles['meal-section']} ${styles.wrapper}`}>
        <div className={styles.container}>
          <h1 className={styles['availablemeals-h1']}>Available Meals</h1>
          <div className={styles['search-filter']}>
            <div className={styles['search-bar-icon']}>
              <input
                className={styles['search-input']}
                type="search"
                name=""
                id=""
                placeholder="Search by name"
              />
              <img
                className={styles['search-icon']}
                src={search}
                alt="search-icon"
              />
            </div>

            <img
              className={styles['filter-icon']}
              src={filter}
              alt="filter-button"
            />
          </div>
        </div>

        <div className={styles.filter}>
          <div className={styles['btn-filter']}>
            <button
              className={`${styles['btn-filter-btn']} ${styles['btn-active']}`}
            >
              BestSellers
            </button>
            <button className={styles['btn-filter-btn']}>Newest</button>
            <button className={styles['btn-filter-btn']}>Breakfast</button>
            <button className={styles['btn-filter-btn']}>Lunch</button>
            <button className={styles['btn-filter-btn']}>Dinner</button>
            <button className={styles['btn-filter-btn']}>Desserts</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealsFilterSearch;
