import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDetail from "../components/ProductDetail";
import Loading from "../components/Loading";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails(id) {
      try {
        const response = await fetch("http://localhost:5000/products/" + id);

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails(productId);
  }, [productId]);

  if (loading) return <Loading />;

  return (
    <div className="container">
      <ProductDetail product={product} />
    </div>
  );
}
