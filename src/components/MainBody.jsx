import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const MainBody = () => {
  // Local State Variables
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const filterTopRatedRestaurants = () => {
    const topRatedList = listOfRestaurant.filter(
      (item) => item.info.avgRating >= 4.5
    );
    setFilteredListOfRestaurant(topRatedList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const result = await data.json();
    const restaurantListData =
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurantListData);
    setFilteredListOfRestaurant(restaurantListData);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredList = listOfRestaurant.filter((item) =>
      item.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredListOfRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h3>Sorry, Check Your internet connection.</h3>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            onChange={handleSearchInputChange}
            value={searchInput}
          />
          <button className="search-btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants :satisfied:
        </button>
      </div>

      <div className="res-container">
        {filteredListOfRestaurant.map((restaurantItem) => (
          <RestaurantCard
            key={restaurantItem.info.id}
            restData={restaurantItem}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
