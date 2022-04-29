import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import HeaderCartProfile from './HeaderCartProfile';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={`${styles.wrapper} ${styles.headerwrapper}`}>
        <h3 className={styles['logo-h3']}>
          <span className={styles['logo-span']}>chow</span>meals
        </h3>
        <HeaderNavigation></HeaderNavigation>
        <HeaderCartProfile></HeaderCartProfile>
      </header>
    </React.Fragment>
  );
};

export default Header;
