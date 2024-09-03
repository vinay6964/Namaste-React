import { CARDS_IMG_URL } from "../utils/constants";

const RestaurantCards = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 p-4">
      <img
        alt="restaurant"
        className="w-full h-40 object-cover rounded-t-lg mb-4"
        src={`${CARDS_IMG_URL}${cloudinaryImageId}`}
      />
      <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 mb-2">{cuisines.slice(0, 3).join(", ")}</h4>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{avgRating} ⭐</span>
        <span>{sla.slaString}</span>
      </div>
    </div>
  );
};

export default RestaurantCards;
