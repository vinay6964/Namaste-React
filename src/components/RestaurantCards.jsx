import { CARDS_IMG_URL } from "../utils/constants";

const RestaurantCards = ({ resData }) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
    return (
      <div className="rest-cards">
        <img
          alt="card"
          className="rest-img"
          src={`${CARDS_IMG_URL}${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.slice(0, 3).join(",")}</h4>
        <h5>{avgRating} ⭐</h5>
        <h5>{sla.slaString}</h5>
      </div>
    );
  };

export default RestaurantCards;  
