import logo from "../../online_food_ordering.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="img" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
