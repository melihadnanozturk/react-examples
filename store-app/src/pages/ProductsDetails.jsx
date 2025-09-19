import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDetail from "../components/ProductDetail";
import Loading from "../components/Loading";
import request from "../api/apiClient";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails(id) {
      try {
        const data = await request.products.details(id);
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
