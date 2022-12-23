import React from "react";
import clases from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <React.Fragment>
      <li className={clases["cart-item"]}>
        <div>
          <h2>{props.name}</h2>
          <div className={clases.summary}>
            <span className={clases.price}>{`$${props.price}`}</span>
            <span className={clases.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={clases.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default CartItem;
