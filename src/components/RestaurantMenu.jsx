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
    <div className="mainResMenu">
      <div className="restHeader">
        <div className="nameCard">
          <div className="restName">
            <h2>{name}</h2>
          </div>
          <div className="restCuisines">
            <h3>{cuisines.join(", ")}</h3>
          </div>
        </div>
        <div className="rateCard">
          <h3 className="restLocality">{locality}</h3>
          <h3 className="restAvgRating">{avgRating}</h3>
          <h3 className="restTotalRating">{totalRatingsString}</h3>
        </div>
      </div>
      <div className="menuLiTitle">
        <h2>Recommendations</h2>
      </div>
      <div className="menuItems">
        {newMenu.map((res) => {
          return (
            <li key={res.id} className="menuLi">
              {res.name}:{" "}
              <span className="menuLiPrice">Rs.{res.price / 100}</span>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
