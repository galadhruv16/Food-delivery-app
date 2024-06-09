import "./App.css";
import resObj from "../utils/mockAPI";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
function Menu() {
  const [resData, setResData] = useState(resObj);
  return (
    <div>
      <div className="search">Search</div>
      <div className="filter-bttn">
        <button
          className="top-rated"
          onClick={() => {
            const filteredList = resData.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            console.log(filteredList);
            setResData(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="cardbody">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
