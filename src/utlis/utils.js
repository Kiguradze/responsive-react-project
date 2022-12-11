export const getProducts = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => data);
};

export const handleToggle = () => {
  const hamburger = document.querySelector(".hamburger");
  const categories = document.querySelector(".categories-list");

  hamburger.classList.toggle("active");
  categories.classList.toggle("active");

  document.querySelectorAll(".list-item").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      categories.classList.remove("active");
    })
  );
};
