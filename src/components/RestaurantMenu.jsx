import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenuFetchData from "../utils/useRestaurantMenuFetchData";
import useNetworkCheck from "../utils/useNetworkCheck";
import OfflineMsg from "./OfflineMsg";
import CategoryItems from "./CategoryItems";

const RestaurantMenu = () => {
  const { restId } = useParams();

  const jsonData = useRestaurantMenuFetchData(restId);
  // console.log("🚀 ~ RestaurantMenu ~ jsonData:", jsonData);

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
    <>
    <CategoryItems data={jsonData}/>
    </>
  );
};

export default RestaurantMenu;
