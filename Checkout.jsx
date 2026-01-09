import { useSelector } from "react-redux";

export default function Checkout() {
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? <p>No items to checkout</p> :
        <>
          <ul>
            {cart.map(item => <li key={item.id}>{item.title} x {item.quantity} - ${item.price * item.quantity}</li>)}
          </ul>
          <h3>Total: ${total}</h3>
          <button>Place Order</button>
        </>
      }
    </div>
  );
}
