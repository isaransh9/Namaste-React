Episode 4

-- First plan the structure of the webpage that you want to built (Rough sketch is must)

-- Whenever you need to reuse a piece of code again and again just make it a component. Like in this case, restaurant card will be used mulitple time so make it a component.

-- By passing this object in any tag you can use inline css, but this is not the preferred.
const style = { backgroundColor: "black", padding: "10px"}
-- This is how you can add the inline css in jsx
const StyleComponent = () => { return ( <div style={style}> <h1>Namaste React</h1></div>); }
Example => <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>

-- Our data is going to be dynamic in the cards. How can we do that ?
-- Using props => props is basically properties which are passed as a argument to the component (as a JS object).
-- while writing calling component you can pass props to the component.
-- Example => <RestaurantCard resName="Meghana Food" cuisine="Biryani, North Indian, Asian" rating="4.5 />
-- This will go as a JS object in the Restaurant component you can destructure it use it with the html like syntax using {}

--How the restaurant data come to us from the backend => Json object
--Config Driven UI => Offers can be different in mumbai or bangalore or any other regions, backend will be sending the data according the config and UI should support the config driven data.

--Dynamic Data from the backend
<RestaurantCardresName="Meghana Food" cuisine="Biryani, North Indian, Asian"rating="4.5 Star" timeToDeliver="20 min"/>
This data is hardcoded => Our application should be dynamic
This is how you can pass the dynamic data as props => <RestaurantCard resData={resObj}/>

--Use functional programming as much as possible
{resList.map((resList) => (
<RestaurantCard key={resList.id} resData={resList} />
))}
--Whenever you loops over something you need to pass a unique key otherwise react will throw a warning to you.
Why? Because if you add a res-card and if you don't pass a unique key then react needs to render all the res-cards again. This is not a good idea. Providing a unique key will help react to optimize rendering performance.
Unique Key (good practice) >>>>>>> index (not good practice)  >>>> not providing any key (warning from react)
React itself says not to use index as unique keys
Example:
  container
   / | \ 
  /  |  \
 r1  r2  r3 

 r1, r2, r3 => res-cards
 Now a new card r0 is added at the front position => If you have not passed the unique key then react have to render all the cards r0, r1, r2 and r3 again.
 If you have passed the unique key then react will only render the r0. Thus this is an optimization technique.

