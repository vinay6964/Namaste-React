import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";

const Body = () => {
  // powerful state variables
  const [restaurants, setRestaurants] = useState([]);
  const [allResList, setAllResList] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    console.log("Before");
    fetchData();
  }, []);
  console.log("After");
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

  const handleSortRatingWise = (e) => {
    e.preventDefault();
    const sortedRestaurants = restaurants.filter(
      (item) => item.info.avgRating >= 4
    );
    setRestaurants(sortedRestaurants);
    console.log(restaurants);
  };

  const handleFilter = (e) => {
    let text = e.target.value;
    console.log(text);
    setFilterText(e.target.value);
    const filteredRes = allResList.filter((item) =>
      item.info.name.toLowerCase().includes(text.toLocaleLowerCase())
    );
    if (filteredRes.length) setRestaurants(filteredRes);
    else setRestaurants([]);
  };

  return (
    <div className="body">
      <div className="search-box">
        <input
          className="textarea"
          rows="1"
          cols="30"
          placeholder="Seach Restaurant"
          value={filterText}
          onChange={handleFilter}
        ></input>
        <button onClick={handleSortRatingWise}>Sort Rating Wise</button>
      </div>
      {restaurants?.length > 0 ? (
        <div className="rest-containers">
          {restaurants.map((item) => (
            <Link to={`/rest/${item.info.id}`} key={item.info.id}><RestaurantCards resData={item} /></Link>
          ))}
        </div>
      ) : !filterText?.length && !restaurants?.length ? (
        <Shimmer />
      ) : (
        <h1>No Restaurants Found</h1>
      )}
    </div>
  );
};

export default Body;
