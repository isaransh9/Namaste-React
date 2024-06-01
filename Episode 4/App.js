import React from "react";
import ReactDOM from "react-dom/client";

// First plan the structure of the webpage that you want to built
/**
 * -Header
 *  -logo
 *  -Nav-items
 * -Body
 *  -Search Bar
 *  -Restaurant Container
 *    -Restaurant Cards
 * -Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

// Whenever you need to reuse a piece of code again and again just make it a component. Like in this case, restaurant card will be used mulitple time so make it a component.

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7Vo9d9xYU5Ul_TY3kkYgOt7yobLhQ2FYGg&s"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Swiggy API Data => We didn't found the actual Swiggy API, so let's make the data for now.

const resObj = {
  id: "845",
  resName: "KFC",
  cuisine: ["Burgers", "Biryani", "American Snacks", "Fast Food"],
  rating: "3.8",
  timeToDeliver: "36",
  img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
};

const resList = [
  {
    id: "85445",
    resName: "KFC",
    cuisine: ["Burgers", "Biryani", "American Snacks", "Fast Food"],
    rating: "3.8",
    timeToDeliver: "36",
    img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
  },
  {
    id: "84557",
    resName: "MacDonald's",
    cuisine: ["Burgers", "Ice-Cream", "Special Drinks"],
    rating: "3.8",
    timeToDeliver: "36",
    img: "https://w7.pngwing.com/pngs/676/74/png-transparent-fast-food-mcdonald-s-logo-golden-arches-restaurant-mcdonalds-mcdonald-s-logo-miscellaneous-food-company-thumbnail.png",
  },
  {
    id: "84554443",
    resName: "Dominos",
    cuisine: ["Pizza", "Veg-Loaded"],
    rating: "3.8",
    timeToDeliver: "36",
    img: "https://w7.pngwing.com/pngs/883/393/png-transparent-dominos-pizza-take-out-restaurant-logo-pizza-logo-food-text-rectangle.png",
  },
  {
    id: "845764",
    resName: "RushHr's",
    cuisine: ["Burgers", "Special Aloo Burger", "Fast Food"],
    rating: "3.8",
    timeToDeliver: "36",
    img: "https://lh3.googleusercontent.com/XzGpoE6N2etsELV83iKtjbN3u1tG7lhmzdtjgrCxKUQwJHFjzyNDUExgu5IAlzysXBZcRMFtgIRW8sl1mYDnyGAt1K8",
  },
  {
    id: "854545",
    resName: "Pizza Hut",
    cuisine: ["Pizza", "Soft Drinks", "Coffee"],
    rating: "3.6",
    timeToDeliver: "26",
    img: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png",
  },
  {
    id: "865445",
    resName: "Relax",
    cuisine: ["Paneer Kulcha", "Chicken", "Bhindi Fry", "Thali"],
    rating: "4.8",
    timeToDeliver: "56",
    img: "https://cdn3.f-cdn.com/contestentries/1295462/26564987/5ac877799b181_thumb900.jpg",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, rating, timeToDeliver, img } = resData;
  // console.log(resData);

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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard key={resList.id} resData={resObj} />
        {/* This below line makes it dynamic */}
        {resList.map((resList) => (
          <RestaurantCard key={resList.id} resData={resList} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Component Composition */}
    </div>
  );
};

root.render(<AppLayout />);
