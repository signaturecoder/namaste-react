import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const MainBody = () => {

  const [resList, setResList] = useState(restaurantList);

  const filterTopRatedRestaurants = () => {
    const topRatedList = restaurantList.filter(item => item.data.avgRating >= 4);
    setResList(topRatedList);
  }

  return (
    <div className="main-body">
      <div className="filter">
        <button onClick={filterTopRatedRestaurants}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((restaurantItem) => (
          <RestaurantCard
            key={restaurantItem.data.id}
            restData={restaurantItem}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
