import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Tsh{product.price.toLocaleString()}</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
