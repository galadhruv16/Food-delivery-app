import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);
  const [resData, setResData] = useState([]);
  const [menu, setMenu] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2010502&lng=72.97853529999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResData(json.data.cards[2]?.card?.card?.info);
    console.log(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setMenu(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
  if (resData.length === 0) {
    return <Shimmer />;
  }
  const {
    name,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    totalRatingsString,
  } = resData;
  const newMenu = menu.map((res) => {
    return {
      name: res.card.info.name,
      price: res.card.info.defaultPrice || res.card.info.price,
    };
  });
  console.log(newMenu);
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{locality}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo / 100} for two</h3>
      <h3>{totalRatingsString}</h3>
      <h2>Menu</h2>
      {newMenu.map((res) => {
        return (
          <li key={res.id}>
            {res.name}: Rs.{res.price / 100}
          </li>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
