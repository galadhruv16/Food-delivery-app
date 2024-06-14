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
        res.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
    <div className="cardbg bg-blue-300 items-center" >
      <div className="mainsearchfilter flex pt-4 mx-60 pl-44 items-center">
        <span className="search ">
          <input className="border-solid border-black border-2 m-2  "
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="mainsearchbtn bg-white p-2 font-bold rounded-lg">
            <button className=""
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
              SEARCH
            </button>
          </span>
        </span>
        <div className="filter-bttn">
          <button
            className="top-rated bg-gray-400 mx-2 p-2 rounded-xl font-bold align-middle hover:bg-gray-500"
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
      <div className="cardbody flex flex-wrap ">
        {resData.map((restaurant) => (
          <Link to={/restaurant/ + restaurant.info.id} key= {restaurant.info.id} className="restCard" >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
