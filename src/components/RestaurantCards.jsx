import { CARDS_IMG_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCards = ({ resData }) => {
  const {userName} = useContext(UserContext)
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <>
      {!resData?.info?.veg && (
        <div className="absolute  w-4 h-4 border-2 border-red-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 p-4">
        <img
          alt="restaurant"
          className="w-full h-40 object-cover rounded-t-lg mb-4"
          src={`${CARDS_IMG_URL}${cloudinaryImageId}`}
        />
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-2">
          {cuisines.slice(0, 3).join(", ")}
        </h4>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{avgRating} ⭐</span>
          <span>{userName}</span>
          <span>{sla.slaString}</span>
        </div>
      </div>
    </>
  );
};

export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <>
        <div className="absolute  w-4 h-4 border-2 border-green-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <RestaurantCards {...props} />
      </>
    );
  };
};

export default RestaurantCards;
