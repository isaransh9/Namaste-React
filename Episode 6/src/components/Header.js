import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  
  // let btnName = "Login";
  // Modifying variable like this will change the variable but it will not re-render the page for us
  // This is why state variables comes into picture
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnName === "Login"? setBtnName("Logout") : setBtnName("Login");
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
