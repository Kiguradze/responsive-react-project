import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const [isPending, setIsPending] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        setIsPending(false);
      });
  });

  return isPending ? (
    <div className="loading">
      Loading...
      <ion-icon name="cloud-download-outline"></ion-icon>
    </div>
  ) : (
    <div className="single-product">
      <img className="single-product__img" src={product.image} alt="" />
      <p className="single-product__category">{product.category}</p>
      <p className="single-product__title">{product.title}</p>
      <p className="single-product__des">{product.description}</p>
      <p className="single-product__price">{product.price}$</p>
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
