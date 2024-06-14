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
    <div className="cardTile rounded-xl flex flex-col flex-wrap w-52 shadow-2xl text-center m-4 bg-gray-300 transition ease-in-out delay-1 hover:hover:-translate-y-1 hover:scale-110 hover:border-solid hover:border-2 hover:border-black" >
      <img className="h-48 p-2 rounded-xl" src={SWG_URL + cloudinaryImageId} />

      <span className="bg-green-500 mr-40 my-2 ml-2 rounded-xl p=4 text-center font-semibold" >{avgRatingString}</span>
      <h3 className="py-4 ml-1 font-bold ">{name}</h3>
      <h3 className="ml-1 font-semibold py-2">{cuisines.join(", ")}</h3>
      <h3 className=" my-2" >{costForTwo}</h3>
      {/* <h3 >{slaString}</h3> */}

      {/* <button>Add to cart</button> */}
    </div>
  );
}

export default RestaurantCard;
