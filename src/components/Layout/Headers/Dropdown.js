import React from 'react';
import { useState } from 'react';
import styles from './Dropdown.module.css';
import dropdown from '../../../assets/HeaderAssets/dropdown2.png';

const Dropdown = (props) => {
  const [navDisplay, setNavDisplay] = useState(false);

  const navDisplayHandler = (e) => {
    e.preventDefault();
    navDisplay ? setNavDisplay(false) : setNavDisplay(true);
  };

  return (
    <>
      <div className={styles.backdrop} onClick={props.cancelCart}></div>
      <div className={`${styles['drodpdown-div']}`} onClick={navDisplayHandler}>
        <img
          className={styles['cart-avatar-drp']}
          src={dropdown}
          alt="dropdown"
        ></img>
      </div>

      <nav
        className={
          navDisplay ? styles['nav-section-active'] : styles['nav-section']
        }
      >
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
    </>
  );
};

export default Dropdown;
