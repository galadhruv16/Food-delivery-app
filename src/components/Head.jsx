import "./App.css";
import { LOGO_URL } from "../utils/const";
import { useState } from "react";
function Head() {
  const [login, setLogin] = useState("Login");
  return (
    <div>
      <div className="app">
        <header className="App-header">
          <nav className="navbar">
            <img className="logo" src={LOGO_URL} alt="food logo" />
            <div>
              <h2>DHRUV FOOD DELIVERY APP</h2>
            </div>
            <ul className="navbuttons">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Cart</li>
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
