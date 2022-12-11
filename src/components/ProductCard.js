import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, id }) => {
  return (
    <Link to={`/product/${product.id}`} className="product" key={product.id}>
      <img className="product-img" src={product.image} alt="" />
      <p className="product-category">{product.category}</p>
      <p className="product-title">{product.title}</p>
      <p className="product-price">{product.price}$</p>
    </Link>
  );
};

export default ProductCard;
