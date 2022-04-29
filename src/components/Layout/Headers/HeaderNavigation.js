import React from 'react';
import styles from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  return (
    <nav className={styles['nav-section']}>
      <a className={styles['nav-section-a']} href="/">
        Collections
      </a>
      <a className={styles['nav-section-a']} href="/">
        Men
      </a>
      <a className={styles['nav-section-a']} href="/">
        Women
      </a>
      <a className={styles['nav-section-a']} href="/">
        About
      </a>
      <a className={styles['nav-section-a']} href="/">
        Contact
      </a>
    </nav>
  );
};

export default HeaderNavigation;
