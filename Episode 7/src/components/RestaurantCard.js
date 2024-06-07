import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData.info;
  const timeToDeliver = resData.info.sla.deliveryTime;

  return (
    <div className="res-card">
      <img className="res-logo" src={RES_LOGO} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{timeToDeliver} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
