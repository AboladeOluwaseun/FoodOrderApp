import React from 'react';
import styles from './HeaderCartProfile.module.css';
import cartIcon from '../../../assets/HeaderAssets/icon-cart.svg';
import profileAvatar from '../../../assets/HeaderAssets/image-avatar.png';

const HeaderCartProfile = () => {
  return (
    <ul className={styles['cart-profile']}>
      <li className={styles['cart-profile-li']}>
        <span className={styles['cart-profile-span']}>3</span>
        <a href="/">
          <img
            className={styles['cart-profile-cart']}
            id="cart"
            src={cartIcon}
            alt="shopping cart"
          ></img>
        </a>
      </li>
      <li className={`${styles['cart-profile-li']}`}>
        <a href="/">
          <img
            className={styles['cart-avatar']}
            src={profileAvatar}
            alt="profileAvatar"
          ></img>
        </a>
      </li>
    </ul>
  );
};

export default HeaderCartProfile;
