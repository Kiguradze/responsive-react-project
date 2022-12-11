import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../utlis/utils";

const Home = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setData(products);
      setIsPending(false);
    });
  }, []);

  return isPending ? (
    <div className="loading">
      Loading...
      <ion-icon name="cloud-download-outline"></ion-icon>
    </div>
  ) : (
    <div className="products">
      {data.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Home;
