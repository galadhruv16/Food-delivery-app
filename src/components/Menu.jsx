import "./App.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.jsx";

import { useState, useEffect } from "react";
import { search_icon } from "../utils/SVGicons";
function Menu() {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    setResData(
      res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="cardbg">
      <div className="mainsearchfilter">
        <span className="search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="mainsearchbtn">
            <button
              onClick={() => {
                const filteredList = resData.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
                );
                console.log(filteredList);
                setResData(filteredList);
              }}
            >
              {search_icon}
            </button>
          </span>
        </span>
        <div className="filter-bttn">
          <button
            className="top-rated"
            onClick={() => {
              const filteredList = resData.filter(
                (restaurant) => restaurant.info.avgRating > 4.0
              );
              console.log(filteredList);
              setResData(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
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
