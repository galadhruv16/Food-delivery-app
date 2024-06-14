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
        <header className="shadow-lg">
          <nav className=" ">
            <div className="flex justify-between bg-orange-100 shadow-2lg">
              <Link to="/">
                <img className="logo w-40" src={LOGO_URL} />
              </Link>

              <h2 className="banner flex items-center font-bold text-2xl">
                FOOD DELIVERY APP
              </h2>

              <ul className="navbuttons flex m-4 items-center">
                <li className="p-4">
                  <Link to="/">{home_icon}</Link>
                </li>
                <li className="p-4">
                  <Link to="/about">{about_icon}</Link>
                </li>
                <li className="p-4">
                  <Link to="/contact">{contact_icon}</Link>
                </li>
                <li className="p-4">
                  <Link to="/cart">{cart_icon}</Link>
                </li>
                <li className="p-4 m-4 px-8">
                  <button
                    className="login font-bold bg-black hover:bg-blue-700 text-white py-2 px-4 rounded-full"
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
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Head;
