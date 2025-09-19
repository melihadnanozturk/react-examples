import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import request from "../api/apiClient";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const data = await request.products.list();

      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container">
      <ProductList param={products} />
    </div>
  );
}
