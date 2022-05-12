import React, { useState, useContext } from 'react';
import styles from './ProductDetails.module.css';
import food from '../../assets/MealSectionAssets/pizza.jpg';
import cart from '../../assets/HeaderAssets/icon-cart.svg';
import CartContext from '../../Store/Cartcontext';

const ProductDetail = (props) => {
  const cartContext = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const addCountHandler = (e) => {
    e.preventDefault();
    setAmount(amount + 1);
  };

  const reduceCountHandler = (e) => {
    e.preventDefault();
    setAmount(amount - 1);
    if (amount < 1) {
      return setAmount(0);
    }
  };

  const onSubmitHandler = (e) => {
    props.cancelDisplay();
    e.preventDefault();
    if (amount === 0) {
      return;
    }
    cartContext.addItem({
      name: props.name,
      price: props.price,
      amount: amount,
      added: 1,
      id: props.id,
    });
  };

  return (
    <>
      <div className={styles.backdrop} onClick={props.cancelDisplay}></div>

      <form className={styles['product-detail']} onSubmit={onSubmitHandler}>
        <img className={styles['product-image']} src={food} alt="food-img" />

        <div className={styles['product-details-section']}>
          <div className={styles['product-info-section']}>
            <p className={styles['product-title-p']}>Chow Meals</p>
            <h2 className={styles['product-title-h2']}>{props.name}</h2>
          </div>

          <p className={styles['product-info']}>
            Yummy {props.name} made with the perfect recipe, <br></br> healthy
            and good for your body
          </p>

          <div className={styles['price-section']}>
            <div className={styles['product-price']}>
              <h3
                className={styles['product-price-h3']}
              >{`$${props.price}`}</h3>
              <span className={styles['product-price-span']}>50%</span>
            </div>
            <p
              className={styles['product-price-p']}
            >{`$${props.formerprice}`}</p>
          </div>

          <div className={styles['add-to-cart']}>
            <ul className={styles['multiple-selection']}>
              <li className={styles['multiple-selection-li']}>
                <button
                  type="button"
                  className={styles['multiple-selection-button']}
                  onClick={reduceCountHandler}
                >
                  -
                </button>
              </li>
              <li className={styles['multiple-selection-li']} id="num">
                <span>{amount}</span>
              </li>
              <li className={styles['multiple-selection-li']}>
                <button
                  type="button"
                  className={styles['multiple-selection-button']}
                  onClick={addCountHandler}
                >
                  +
                </button>
              </li>
            </ul>

            <button type="submit" className={styles['add-to-cart-button']}>
              <span>
                <img
                  className={styles['add-to-cart-img']}
                  src={cart}
                  alt="cart-img"
                />
              </span>
              <span>
                <p className={styles['add-to-cart-p']}>Add to Cart</p>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductDetail;
