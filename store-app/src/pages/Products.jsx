import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        {
          const repsonse = await fetch("http://localhost:5000/products");
          const data = await repsonse.json();

          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <ProductList param={products} />
    </div>
  );
}
