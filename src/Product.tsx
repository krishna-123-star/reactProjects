
type ProductProps = {
  id: number;
  name: string;
  price: number;
  onAddToCart: (id: number) => void;
};

function Product({ id, name, price, onAddToCart }: ProductProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
    </div>
  );
}

export default Product;
