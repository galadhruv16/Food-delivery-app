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
      <div className="mainResMenu  ">
        <div className="restHeader  ">
          <div className="p-8 mx-[540px] rounded-2xl  text-center border-solid border-black border-2">
            <div className="restName">
              <h2 className="font-bold text-2xl">{name}</h2>
            </div>
            <div className="restCuisines font-semibold text-lg">
              <h3>{cuisines.join(", ")}</h3>
            </div>

            <div className="rateCard ">
              <h3 className="restLocality">{locality}</h3>
              <h3 className="restAvgRating bg-green-500 mx-16 rounded-2xl">
                {avgRating}
              </h3>
              <h3 className="restTotalRating">{totalRatingsString}</h3>
            </div>
          </div>
        </div>
        <div className="menuLiTitle font-bold text-2xl text-center mt-8">
          <h2>Recommendations</h2>
        </div>
        <div className="menuItems my-4 ">
          {newMenu.map((res) => {
            return (
              <li
                key={res.id}
                className="menuLi  font-bold px-12 mx-28 my-4 rounded-xl p-5 flex justify-between list-none border-solid border-black border-2 transition ease-in-out delay-1 hover:hover:-translate-y-1 hover:scale-110 hover:border-solid hover:border-2 hover:border-black"
              >
                {res.name}:{" "}
                <span className="menuLiPrice bg-yellow-300 rounded-2xl p-2">
                  Rs.{res.price / 100}
                </span>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
