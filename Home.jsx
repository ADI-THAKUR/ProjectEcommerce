import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = category === "all"
    ? products
    : products.filter(p => p.category === category);

  if (loading) return <Spinner />;

  return (
    <div>
      <h2>Products</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        {/* Add more categories if needed */}
      </select>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
