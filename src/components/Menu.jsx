import "./App.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.jsx";
import { useState, useEffect } from "react";
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
  };
  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="cardbg">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
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
