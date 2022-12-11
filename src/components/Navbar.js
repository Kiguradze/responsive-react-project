import { Link } from "react-router-dom";
import GetAllCategories from "./GetAllCategories";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <ion-icon name="home-outline"></ion-icon>
      </Link>
      <GetAllCategories />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
