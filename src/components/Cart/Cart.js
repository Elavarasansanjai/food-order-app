import React, { useContext } from "react";
import clases from "./cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-contex";
import CartItem from "./CartItem";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItem = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  const hasItems = cartCtx.items.length > 0;
  console.log(cartItem);
  return (
    <Modal onClose={props.onClose}>
      <ul className={clases["cart-items"]}>{cartItem}</ul>
      <div className={clases.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={clases.actions}>
        <button className={clases["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={clases.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
