import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenuFetchData from "../utils/useRestaurantMenuFetchData";
import useNetworkCheck from "../utils/useNetworkCheck";
import OfflineMsg from "./OfflineMsg";

const RestaurantMenu = () => {
  const { restId } = useParams();

  const jsonData = useRestaurantMenuFetchData(restId);
  console.log("🚀 ~ RestaurantMenu ~ jsonData:", jsonData);

  const resName = jsonData?.data?.cards[0]?.card?.card?.text;
  const menuList =
    jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;

  const isOffline = useNetworkCheck();
  if (isOffline) {
    return <OfflineMsg />;
  }

  return !resName ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resName}</h1>
      <h2>Menu</h2>
      <ul>
        {menuList?.map((item) => {
          return (
            <li key={item.card.info.id}>
              <p>
                {item.card.info.name} - Rs {item.card.info.price / 100}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
