import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const itemsCart = useSelector((store) => store.cart.items);
  console.log("Item list in cart page", itemsCart);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      Cart here....
      <div style={{ paddingLeft: "300px" }}></div>
      <button className="filter_btn" onClick={emptyCart}>
        Clear
      </button>
      <ItemList itemList={itemsCart} />
    </div>
  );
};
export default Cart;
