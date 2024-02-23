import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";

const RestaurantMenuDetails = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  if(restInfo === null) return <Shimmer />;

  const cards  = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
    <div className="restaurant-menu">
      <h2>{restInfo?.cards[0]?.card?.card?.text}</h2>
      <h4>{restInfo?.cards[0]?.card?.card?.info?.cuisines}</h4>
      <ul>
        {cards?.map(
          (item) => {
            if (item?.card?.card?.title) {
              const title = item?.card?.card?.title;
             return <li key={title}>{title}</li>;
            }
          }
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenuDetails;
