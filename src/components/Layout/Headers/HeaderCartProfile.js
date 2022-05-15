import React from 'react';
import { useContext, useState } from 'react';
import styles from './HeaderCartProfile.module.css';
import cartIcon from '../../../assets/HeaderAssets/icon-cart.svg';
import profileAvatar from '../../../assets/HeaderAssets/image-avatar.png';
import CartContext from '../../../Store/Cartcontext';
import Cart from '../../UI/Cart/Cart';
import Orderconfirmed from '../../UI/Orderconfirmed';

const HeaderCartProfile = (props) => {
  const cartContext = useContext(CartContext);
  const [display, setDisplay] = useState();
  const [checkOutModal, setCheckoutModal] = useState();

  const onClickHandler = (e) => {
    e.preventDefault();
    setDisplay(true);
  };
  const closeCartHandler = (e) => {
    setDisplay(false);
  };
  const showCheckOutHandler = () => {
    setCheckoutModal(true);
  };
  const closeCheckOutHandler = (e) => {
    e.preventDefault();
    setCheckoutModal(false);
  };

  const numberOfItems = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.added;
  }, 0);

  return (
    <>
      {checkOutModal && (
        <Orderconfirmed cancelCheckOut={closeCheckOutHandler}></Orderconfirmed>
      )}
      {display && (
        <Cart
          showCheckOut={showCheckOutHandler}
          cancelCart={closeCartHandler}
        ></Cart>
      )}
      <ul className={styles['cart-profile']}>
        <li className={styles['cart-profile-li']}>
          <div
            className={styles['cart-profile-cart-button']}
            type="button"
            onClick={onClickHandler}
          >
            <span className={styles['cart-profile-span']}>{numberOfItems}</span>
            <div>
              <img
                className={styles['cart-profile-cart']}
                id="cart"
                src={cartIcon}
                alt="shopping cart"
              ></img>
            </div>
          </div>
        </li>

        <li className={`${styles['cart-profile-li']}`}>
          <div>
            <img
              className={styles['cart-avatar']}
              src={profileAvatar}
              alt="profileAvatar"
            ></img>
          </div>
        </li>
      </ul>
    </>
  );
};

export default HeaderCartProfile;
