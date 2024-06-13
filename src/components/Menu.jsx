import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu.jsx";
import "./App.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.jsx";

import { useState, useEffect } from "react";
import { search_icon } from "../utils/SVGicons";
function Menu() {
  const [resData, setResData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allResData, setAllResData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2010502&lng=72.97853529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await response.json();
      console.log(res);
      const restaurants =
        res.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setResData(restaurants);
      setAllResData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
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
          <Link to={/restaurant/ + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
