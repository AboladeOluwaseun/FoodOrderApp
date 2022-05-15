import React from 'react';
import styles from './Orderconfirmed.module.css';
import cancel from '././../../assets/HeaderAssets/cancel.png';

const Orderconfirmed = (props) => {
  return (
    <>
      <img
        className={styles['cancel-img']}
        src={cancel}
        alt="dropdown"
        onClick={props.cancelCheckOut}
      ></img>
      <div className={styles.backdrop} onClick={props.cancelCheckOut}></div>
      <div className={styles.cart}>
        <p className={styles['checkout-p']}>
          Thank You for trusting{' '}
          <span className={styles['checkout-span1']}>
            Chow<span className={styles['checkout-span2']}>Meals</span>
          </span>
          <br></br>
          Your Order will be delivered to you shortly
        </p>
      </div>
    </>
  );
};

export default Orderconfirmed;
