import React, {useState} from 'react';
import RestaurantCards from './RestaurantCards'
import restaurantsList from '../utils/dummyData';

const Body = () => {
    // powerful state variables
    const [restaurants,setRestaurants] = useState(restaurantsList);

    const handleSortRatingWise = (e) => {
       e.preventDefault();
       const sortedRestaurants = restaurants.filter((item)=> item.info.avgRating >= 4)
       setRestaurants(sortedRestaurants);
       console.log(restaurants)
    }

    return (
      <div className="body">
        <div className="search-box">
          <textarea className= "textarea" placeholder="Seach Restaurant"></textarea>
          <button onClick={handleSortRatingWise}>Sort Rating Wise</button>
        </div>
        <div className="rest-containers">
          {restaurants.map((item) => (
            <RestaurantCards key={item.info.id} resData={item} />
          ))}
        </div>
      </div>
    );
  };

export default Body;