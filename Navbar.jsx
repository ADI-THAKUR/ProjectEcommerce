import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.items.length);
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/home">Home</Link> |{" "}
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}
