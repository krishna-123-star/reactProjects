import { useLocation, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <h2>No product data found for ID {id}</h2>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" height="200" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
