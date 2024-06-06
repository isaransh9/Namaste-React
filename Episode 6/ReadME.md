Episode 6

Two types of achitecture
-- Monolith => Keepping all the components of the application together
(Backend , Frontend , DB , SMS Services , etc)
-- Microservices => Keeping different modules of different part of application
  - You can use multiple different tech stack to build different modules.
  - They interact using api calls. Hosted on different platforms.

Two ways to call an API
1 => Load => API call => render
2 => Load => render( basic skeleton ) => API call => render   => Preferred way, it provide better user experience

-- We should not use the hardcoded mockData instead use dynamic data fetched using some API. Swiggy API that is used in the course does not exist now or have changed the form. To tackle this situation we developed a basic backend application through which we can fetch the data (mockData).

-- useEffect => Its a normal javascript function with specific use case. It takes two arguments one is the callback function and another one is the dependency. Callback function will be called only after the component is rendered.
In our case in the bodyComponent => Fetching will be done after the body component has been rendered and it will set the restaurantList and then also it will re-render because our state variable will be updated.
Re-rendering is not a problem because react has the most efficient rendering cycles.
Whole component will be re rendered if react found any changes in the state variable.

--how we are able to update the const variable using useState => 

--Better User Experience => shimmer UI => cycological impact on human

-- useCase of useState => Filtering the restaurants list using the input box text
  - created a state variable which will contain the input box text => binding the input box data with a state variable
  - <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}></input>
  - if we avoid writing onChange attribute then we will not be able to write any text in the i/p box because input box is tied to a state variable searchText which is initialized to empty string.
  - as soon as we type anything in the i/p box, the searchText will be modified and the whole body component will be re-rendered.
  - react reconciliation cycle is so fast that you will think that the component is not getting re-rendered but it is.

-- filtering the restaurant
  - filtering the restaurant list using the input box and updating the restaurantList a state variable
  - there is a bug in this, since we are updating the restaurantList by which we are lossing the restaurant data fetched through the api and again if we try to filter then it will search in the updated restaurant list.
  - search should work on all the restaurant
  - to solve this problem, we can create another state variable which will only contain the filtered restaurant => see the code for more detail
