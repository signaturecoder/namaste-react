import { useNavigate } from "react-router-dom";
import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const navigate = useNavigate();

  const { id, avgRating, cloudinaryImageId, costForTwo, cuisines, name, sla: {deliveryTime} } =
    restData?.info;

    const navigateToRestaurantsDetails = (id) => {
      navigate(`/restaurants/${id}`)
      ;
    }

    console.log("ID ", id);
  return (
    <div className="res-card" onClick={() => navigateToRestaurantsDetails(id)}>
      <img
        className="res-card-image"
        src={IMAGE_CDN_URL + cloudinaryImageId}
        alt="Card Image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4 className="res-card-cuisines">{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
