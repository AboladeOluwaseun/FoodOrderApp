import React from 'react';
import { useState } from 'react';
import food from '../../../assets/MealSectionAssets/pizza.jpg';
// import styles from './Cart.module.css'
import styles from './CartItem.module.css';
import deleteIcon from '../../../assets/MealSectionAssets/delete.svg';

const CartItem = (props) => {
  const totalItemPrice = props.price * props.amount;

  return (
    <div className={styles['cart-item']}>
      <img className={styles['cart-item-img']} src={props.img} alt="food-img" />
      <div className={styles['cart-item-detail']}>
        <h3 className={styles['cart-item-h3']}>{props.name}</h3>
        <p className={styles['cart-item-p']}>
          {' '}
          {`$${props.price} x ${props.amount}= $${totalItemPrice}`}
        </p>
      </div>
      <div className={styles['edit-cart-item']}>
        <div className={styles['edit-cart-item-btns']}>
          <button
            onClick={props.onRemove}
            type="button"
            className={styles['add-cart-item']}
          >
            -
          </button>
          <button
            onClick={props.onAdd}
            type="button"
            className={styles['add-cart-item']}
          >
            +
          </button>
        </div>
        <span onClick={props.onDelete}>
          <img
            className={styles['delete-item-img']}
            src={deleteIcon}
            alt="delete-icon"
          />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
