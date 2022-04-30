import React from 'react';
import styles from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  return (
    <nav className={styles['nav-section']}>
      <a className={styles['nav-section-a']} href="/">
        Homes
      </a>
      <a className={styles['nav-section-a']} href="/">
        Dishes
      </a>
      <a className={styles['nav-section-a']} href="/">
        Menu
      </a>
      <a className={styles['nav-section-a']} href="/">
        Review
      </a>
      <a className={styles['nav-section-a']} href="/">
        Order
      </a>
    </nav>
  );
};

export default HeaderNavigation;
