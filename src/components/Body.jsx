import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCards, {withPromotedLabel} from "./RestaurantCards";
import Shimmer from "./Shimmer";
import useNetworkCheck from "../utils/useNetworkCheck";
import OfflineMsg from "./OfflineMsg";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {userName,setUserLogged} = useContext(UserContext)
  const [restaurants, setRestaurants] = useState([]);
  const [allResList, setAllResList] = useState([]);
  const [filterText, setFilterText] = useState("");

  const PromotedRestairantCards = withPromotedLabel(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOffline = useNetworkCheck();
  if (isOffline) {
    return <OfflineMsg />;
  }

  const handleSortRatingWise = (e) => {
    e.preventDefault();
    const sortedRestaurants = restaurants.filter(
      (item) => item.info.avgRating >= 4
    );
    setRestaurants(sortedRestaurants);
  };

  const handleFilter = (e) => {
    let text = e.target.value;
    setFilterText(e.target.value);
    const filteredRes = allResList.filter((item) =>
      item.info.name.toLowerCase().includes(text.toLowerCase())
    );
    if (filteredRes.length) setRestaurants(filteredRes);
    else setRestaurants([]);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-4 flex justify-center items-center">
        <input
          className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="1"
          cols="30"
          placeholder="Search Restaurant"
          value={filterText}
          onChange={handleFilter}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSortRatingWise}
        >
          Sort Rating Wise
        </button>
      <div className="mb-4 flex justify-center items-center m-3">
       <label className="px-2">User Logged In : {}</label>
       <input className="px-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
       onChange={(e)=>{setUserLogged(e.target.value)}}
        value={userName}
       >
       </input>
      </div>
      </div>
      {restaurants?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {restaurants.map((item) => (
            <Link to={`/rest/${item.info.id}`} key={item.info.id}>
              {
                item?.info?.veg ? (<PromotedRestairantCards resData={item}/>) : (<RestaurantCards resData={item} />)
              }
            </Link>
          ))}
        </div>
      ) : !filterText?.length && !restaurants?.length ? (
        <Shimmer />
      ) : (
        <h1 className="text-center text-gray-500 text-lg">No Restaurants Found</h1>
      )}
    </div>
  );
};

export default Body;
