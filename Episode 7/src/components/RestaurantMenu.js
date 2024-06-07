import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { MENU_URL } from "../utils/constants.js";
import { useParams } from "react-router-dom";

// useParams is a hook used to read the parameters passed in the route => superpower

const RestaurantMenu = () => {
  
  const [menuList, setMenuList] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    // fetching restaurant data dynamically
    const list = await data.json();
    setMenuList(list);
  };

  if (menuList === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = menuList.info;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwo} for two</h3>
      <h3>In our data we does'nt have menu item, skipping it for now </h3>
    </div>
  );
};

export default RestaurantMenu;
