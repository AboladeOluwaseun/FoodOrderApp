import React from 'react';
import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation';
import HeaderCartProfile from './HeaderCartProfile';
import Dropdown from './Dropdown';
import styles from './Header.module.css';

const Header = (props) => {
  const [navDisplay, setNavDisplay] = useState(false);
  const toggleDropDownDisplay = () => {
    {
    }
  };
  const navDisplayHandler = (e) => {
    setNavDisplay(true);
  };

  return (
    <React.Fragment>
      <header className={`${styles.wrapper} ${styles.headerwrapper}`}>
        <h3 className={styles['logo-h3']}>
          <span className={styles['logo-span']}>chow</span>meals
        </h3>
        <HeaderNavigation></HeaderNavigation>
        {navDisplay && <Dropdown></Dropdown>}
        <HeaderCartProfile navDisplay={navDisplayHandler}></HeaderCartProfile>
      </header>
    </React.Fragment>
  );
};

export default Header;
