import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenuDetails = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const restaurantMenu = await fetch(MENU_API + resId);
    const restaurantMenuJSON = await restaurantMenu.json();
    setRestInfo(restaurantMenuJSON.data);
    // console.log("DAta ", restaurantMenuJSON.data);
  };
  return (
    <div className="restaurant-menu">
      <h2>{restInfo?.cards[0]?.card?.card?.info?.name}</h2>
      <h4>{restInfo?.cards[0]?.card?.card?.info?.cuisines}</h4>
      <ul>
        {restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (item) => {
            if (item?.card?.card?.title) {
             return <li>{item?.card?.card?.title}</li>;
            }
          }
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenuDetails;
