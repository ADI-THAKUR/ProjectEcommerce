import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> :
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.title} x {item.quantity} - ${item.price * item.quantity}
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      }
    </div>
  );
}
 