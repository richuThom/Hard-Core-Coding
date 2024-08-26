import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import { useState, useEffect } from "react";
import Accordion from "./Accordion";
const Restaurant = () => {
  const { resId } = useParams();

  //const restaurantList = useRestaurantData(resId);

  const [restaurantList, setRestaurantList] = useState([]);
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=" +
        resId
    );

    const json = await data.json();

    setRestaurantList(json.data);
  };

  if (restaurantList.length === 0) return <Shimmer />;
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    totalRatingsString,
    feeDetails,
  } = restaurantList.cards[2]?.card?.card?.info;

  const filterdList =
    restaurantList.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <div className="menu-title">
        <ul>
          <h1>{name}</h1>
          <li>
            {avgRating} ({totalRatingsString}) {costForTwoMessage}
          </li>
          <li>{cuisines.join(", ")}</li>
          <li>Outlet {areaName}</li>
          {filterdList.map((list, index) => (
            <Accordion
              key={list?.card?.card?.title}
              data={list?.card?.card}
              flag={index === showIndex && true}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Restaurant;
