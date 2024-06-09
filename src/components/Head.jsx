import "./App.css";
import { LOGO_URL } from "../utils/const";
function Head() {
  return (
    <div>
      <div className="app">
        <header className="App-header">
          <nav className="navbar">
            <img
              className="logo"
              src= {LOGO_URL}
              alt="food logo"
            />
            <div><h2>DHRUV FOOD DELIVERY APP</h2></div>
            <ul className="navbuttons">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Cart</li>
            </ul>
          </nav>
        </header>
      </div>
      
    </div>

  );
}

export default Head;
