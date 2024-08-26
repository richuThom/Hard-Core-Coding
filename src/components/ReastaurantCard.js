const ReastaurantCard = (props) => {
  const { resObj } = props;
  //const { name, cuisine, rating, image, timing } = resObj?.info;
  //console.log(resObj?.info);
  return (
    <div className="restaurant-card">
      <div className="card">
        <img
          className="restaurant"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resObj.info.cloudinaryImageId
          }
        ></img>
        <h3>{resObj.info.name}</h3>
        <h4>{resObj.info.cuisines.join(",")}</h4>

        <h4>{resObj.info.avgRating}</h4>
      </div>
    </div>
  );
};
export const WithFreeDelivery = (ReastaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Free Delivery</label>
        <ReastaurantCard {...props} />
      </div>
    );
  };
};
export default ReastaurantCard;
