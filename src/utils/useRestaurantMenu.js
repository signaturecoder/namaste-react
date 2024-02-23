import { useState, useEffect } from "react";
import {MENU_API} from "./constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const restaurantMenu = await fetch(MENU_API + resId);
    const restaurantMenuJSON = await restaurantMenu.json();
    setRestInfo(restaurantMenuJSON.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
