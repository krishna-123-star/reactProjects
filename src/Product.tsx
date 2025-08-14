import React from "react";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  addToCart: (id: number) => void;
};

function Product({ id, name, price, addToCart }: ProductProps) {
  console.log(`Rendering Product: ${name}`);
  return (
    <div>
      <h4>{name}</h4>
      <p>₹{price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
}

export default React.memo(Product);
