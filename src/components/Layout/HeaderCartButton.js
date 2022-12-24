import CartIcon from "../Cart/CardIcon";
import clases from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-contex";
const HeaderCartButton = (props) => {
  const [btnIsHighlited, setbtnIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const { items } = cartCtx;
  const btnClases = `${clases.button} ${btnIsHighlited ? clases.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighlited(true);
    const timer = setTimeout(() => {
      setbtnIsHighlited(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onShowCart} className={btnClases}>
      <span className={clases.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={clases.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
