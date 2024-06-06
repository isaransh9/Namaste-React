import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("Body component is rendered!!");

  const [restaurantList, setrestaurantList] = useState([]);
  // we will not update the restaurantList

  const [filterRestaurantList, setfilterRestaurantList] = useState([]);
  // we will update the filterRestaurantList whenever the user is seaching the restaurant

  const [searchText, setSearchText] = useState("");

  // useEffect is a hook that runs a piece of code after the component has been rendered. Fetching will be done after the body component has been rendered and it will set the restaurantList and then also it will re-render because our state variable will be updated.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api/restaurantData");
    // fetch is given to us by the browser
    console.log("API call is made now");
    const newResList = await data.json();
    setrestaurantList(newResList);
    setfilterRestaurantList(newResList);
  };

  // Conditional rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  // Using ternary operator for rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              // filtering the restaurant list based on the search text and setting the restaurantList which will be rendered automatically when a state variable changes
              const filteredList = restaurantList.filter((res) => {
                return res.resName
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilterRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Top Rated Restaurants");
            const filteredList = restaurantList.filter((res) => res.rating > 4);
            setfilterRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurantList.map((resList) => (
          <RestaurantCard key={resList.id} resData={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;
