import { handleToggle } from "../utlis/utils";

const HamburgerMenu = () => {
  return (
    <div onClick={handleToggle} className="hamburger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default HamburgerMenu;
