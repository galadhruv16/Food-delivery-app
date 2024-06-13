import "./App.css";
import { LOGO_URL } from "../utils/const";
import { useState } from "react";
import { Link } from "react-router-dom";
import { home_icon } from "../utils/SVGicons";
import { about_icon } from "../utils/SVGicons";
import { contact_icon } from "../utils/SVGicons";
import { cart_icon } from "../utils/SVGicons";
function Head() {
  const [login, setLogin] = useState("Login");
  return (
    <div className="iskostickkar">
      <div className="app">
        <header className="App-header">
          <nav className="navbar">
            <Link to="/">
              <img className="logo" src={LOGO_URL} alt="food logo" />
            </Link>
            <div>
              <h2 className="banner">FOOD DELIVERY APP</h2>
            </div>
            <ul className="navbuttons">
              <li>
                <Link to="/">{home_icon}</Link>
              </li>
              <li>
                <Link to="/about">{about_icon}</Link>
              </li>
              <li>
                <Link to="/contact">{contact_icon}</Link>
              </li>
              <li>
                <Link to="/cart">{cart_icon}</Link>
              </li>
              <li>
                <button
                  className="login"
                  onClick={() => {
                    if (login === "Logout") {
                      setLogin("Login");
                    } else {
                      setLogin("Logout");
                    }
                  }}
                >
                  {login}
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Head;
