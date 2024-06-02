Episode 5

--Folder Structure used in industries
  -Keep all the components in the component folder
  -utils is basically the utility (constants) which will be used all across the application

--Two types of exports are there
  -export default Body => import Body from "path"
  -export const Body => import {Body} from "path

--You can use .js or .jsx, it hardly matters ==> Keep things simple

--If you want to filter the restaurant whose rating is higher than 4. Now keep it simple and logical if my resList contains the restaurant which has the rating of > 4 then automatically my UI will be changed accordingly.
--changing the const resList variable using filter function won't re-render the component => For this purpose we need to use react hook useState => its a basic js utility function
import {useState} from "react"
const [restaurantList, setRestaurantList] = useState(resList); => Only inside a component
resList will be the initial list and whenever you modify the restaurantList variable your component will be re-rendered
React constantly checks of a state variable is changed then it automatically re-render the component

--Reconciliation Algorithm (React fiber)
--react creates a virtual DOM which is a representation of actual DOM structure. Its a basic javascript object similar to what we get when we create a React element using React.createElement("h1",{},{});
--Actual DOM structure is => <div> <img> </img> </div>

--Diff Algorithm => finds out the difference b/w previous VDOM and updated VDOM and it will then update the actual DOM
Finding the difference between html is a bit difficult as compared to finding the difference between js object (VDOM).

