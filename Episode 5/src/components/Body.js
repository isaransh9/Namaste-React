import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata.js";
import { useState } from "react";




const Body = () => {
  // Declaration and initialization of useState variable only inside a component => Superpowerful variable
  // Local state variables
  
  const [restaurantList, setrestaurantList] = useState(resList)
  // Destructuring arr that the useState returns 

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Top Rated Restaurants");
            const filteredList = restaurantList.filter(res => res.rating > 4);
            setrestaurantList(filteredList);
            // This will set the useState variable to the filteredlist and automatically re-render the body component
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((resList) => (
          <RestaurantCard key={resList.id} resData={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;
