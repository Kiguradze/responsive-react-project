import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setIsPending(false);
      });
  }, [name]);

  return isPending ? (
    <div className="loading">
      Loading...
      <ion-icon name="cloud-download-outline"></ion-icon>
    </div>
  ) : (
    <div className="products">
      {products.map((product) => {
        return (
          <Link
            to={`/product/${product.id}`}
            className="product"
            key={product.id}
          >
            <img className="product-img" src={product.image} alt="" />
            <p className="product-category">{product.category}</p>
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price}$</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
