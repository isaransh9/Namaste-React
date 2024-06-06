const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, rating, timeToDeliver, img } = resData;

  return (
    <div className="res-card">
      <img className="res-logo" src={resData.img} alt="res-logo" />
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating} star</h4>
      <h4>{timeToDeliver} minutes</h4>
    </div>
  );
};

export default RestaurantCard;