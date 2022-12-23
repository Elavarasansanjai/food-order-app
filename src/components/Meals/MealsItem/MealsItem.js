import React,{useContext} from "react";
import clases from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cart-contex";
  

const MealsItem = (props) => {
  const cartCtx=useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler=amount=>{
       cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
       })
  }
  return (
    <li className={clases.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={clases.description}>{props.description}</div>
        <div className={clases.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};
export default MealsItem;
