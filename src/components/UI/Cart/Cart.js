import React from 'react';
import { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../../Store/Cartcontext';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = cartContext.totalAmount;

  const cartSubmitHandler = (e) => {
    e.preventDefault();
    props.cancelCart();
  };

  const onAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartContext.removeitem(id);
  };

  const onDeleteHandler = (id) => {
    cartContext.deleteItem(id);
  };

  const CartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            name={item.name}
            price={item.price}
            amount={item.amount}
            key={item.id}
            img={item.img}
            onAdd={onAddHandler.bind(null, item)}
            onRemove={onRemoveHandler.bind(null, item.id)}
            onDelete={onDeleteHandler.bind(null, item.id)}
          ></CartItem>
        );
      })}
    </ul>
  );

  const hasItems = cartContext.items.length > 0;

  return (
    <>
      <div className={styles.backdrop} onClick={props.cancelCart}></div>
      <form className={styles.cart} onSubmit={cartSubmitHandler}>
        <header className={styles.header}>Your Cart</header>
        {hasItems ? (
          CartItems
        ) : (
          <p className={styles['empty-cart']}>Your Cart is Empty</p>
        )}
        {hasItems && (
          <div className={styles['total-amount-section']}>
            <h4 className={styles['total-amount-h4']}>Total Amount</h4>
            <p className={styles['total-amount-h4']}>{`$${totalAmount}`}</p>
          </div>
        )}

        {hasItems && (
          <button className={styles['submit-btn']} type="submit">
            Check Out
          </button>
        )}
      </form>
    </>
  );
};

export default Cart;
