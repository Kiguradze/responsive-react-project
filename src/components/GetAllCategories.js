import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <>
      <ul className="categories-list">
        {categories.map((category) => {
          return (
            <li className="list-item" key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GetAllCategories;
