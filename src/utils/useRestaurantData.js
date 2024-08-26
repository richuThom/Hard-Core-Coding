import { useEffect, useState } from "react";
const useRestaurantData = (resId) => {
  const [restaurantList, setRestaurantList] = useState([]);
  //logic to fetch data
  console.log("Inside use restaurant data page");
  useEffect(() => {
    console.log("Inside use effect hook");
    fetchData(), [];
  });

  const fetchData = async () => {
    console.log("Inside fetch databefore fetching data");
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=" +
        resId
    );
    console.log("Inside fetch after fetching data");
    const json = await data.json();
    console.log("data fetched in useRestaurantData page", json);
    setRestaurantList(json.data);
  };

  return restaurantList;
};

export default useRestaurantData;
