import apiObjList from "../utils/mockData";
import ReastaurantCard, { WithFreeDelivery } from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //const [objList, setObjList] = useState(apiObjList);
  const [objList, setObjList] = useState([]);
  const [filterdList, setFilterdList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const status = useOnlineStatus();
  //const RestaurantCardFreeDelivery = WithFreeDelivery(ReastaurantCard);
  let chFlag = true;
  console.log("status is : ", status);
  console.log(null || "string");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    let keyOnly = Object.keys(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0]?.info
    );

    //optional chaining
    setObjList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //   if (objList.length === 0) {
  //     return <Shimmer />;
  //   }
  if (status === false) {
    return <h1>You are Offline</h1>;
  }
  return objList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          name="search"
          style={{
            width: "561px",
            height: "50px",
            border: "none",
            boxShadow: "0 1px 6px 0 ",
            borderRadius: "50px",
          }}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setObjList(objList);
          }}
        ></input>
        <button
          type="submit"
          onClick={() => {
            const filterdList = objList.filter((res) =>
              res.info.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilterdList(filterdList);
          }}
        >
          Submit
        </button>

        <div className="filter">
          <button
            type="submit"
            className="filter_btn"
            onClick={() => {
              const tempObj = objList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilterdList(tempObj);
            }}
          >
            Filter By Rating
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filterdList.map((apiList) => (
          <Link to={"/restaurant/" + apiList.info.id} key={apiList.info.id}>
            <ReastaurantCard resObj={apiList} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
