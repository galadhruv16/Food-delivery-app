import "./App.css";
import resObj from "../utils/mockAPI";
import RestaurantCard from "./RestaurantCard";
function Menu() {
  return (
    <div>
      <div className="search">Search</div>
      <div className="cardbody">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}



export default Menu;
