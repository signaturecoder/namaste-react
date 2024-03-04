import { useNavigate } from "react-router-dom";
import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const navigate = useNavigate();

  const {
    id,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    name,
    sla: { deliveryTime },
  } = restData?.info;

  const navigateToRestaurantsDetails = (id) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div
      className="w-[300px] m-2 rounded-lg"
      onClick={() => navigateToRestaurantsDetails(id)}
    >
      <img
        className="rounded-lg"
        src={IMAGE_CDN_URL + cloudinaryImageId}
        alt="Card Image"
      />
      <div className="p-2">
        <h3 className="font-bold text-xl">{name}</h3>
        <h4 className="flex flex-wrap text-gray-400 text-ellipsis w-[250px]">{cuisines.join(",")}</h4>
        <div className="flex">
          {" "}
          <h4 className="res-card-cuisines px-1">{avgRating} stars</h4><span className="items-center">.</span>
          <h4  className="px-1">{deliveryTime} minutes</h4>
          <h4 className="px-1">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
