import { SWG_URL } from "../utils/const";
function RestaurantCard(props) {
  // eslint-disable-next-line react/prop-types
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    costForTwo,
    cuisines,
    slaString,
    // eslint-disable-next-line react/prop-types
  } = resData?.info || {}; // Add default value for resData.info

  return (
    <div className="cardTile">
      <img className="food" src={SWG_URL + cloudinaryImageId} />

      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString}</h3>
      <h3>{costForTwo} for two</h3>
      <h3>{slaString}</h3>

      {/* <button>Add to cart</button> */}
    </div>
  );
}

export default RestaurantCard;
