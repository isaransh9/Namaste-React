Episode 7

-- useEffect(() => {}, []);
  - if there is no dependency array then useEffect will be called on every render
  - if dependency array is empty then useEffect will be called only on initial render (just once)
  - if dependency array contains [btnName], then useEffect will be called only when it encounter any changes in the btnName variable

  - never declare a useEffect outside the component
  - try to declare them at the top of the component
  - never declare it inside condition, loops, or function => create inconsistencies

-- routes in react
  - react-router-dom npm package that manages the routing 
  - createBrowserRouter and RouterProvider are two function using which routes are created
  - This is how you create the routes => const appRouter = createBrowserRouter([{ path: "/", element: <AppLayout /> errorElement: <Error/>}])
    root.render(<RouterProvider router={appRouter} />); 

-- react-router-dom also provide a hook (useRouteError) which gives additional information about the error

-- children routes
  - moving on to a different page our header should be intacted to every page
  - using outlet component provided by react-router-dom, by which you can render any page as per the condition or the routes
  - see the code in the body component for more information

-- linking pages with the bottons
  - one possible way is to use anchor tag and put the url in the href => Do not use it not recommended as it will load whole page again
  - instead use Link which is another superPower given by react-router-dom
  - syntax same as anchor tag <Link to="path"><Link/>
  - Link will not re-render whole page
  - this is why react is called as single page application as you can render components in a single page and user feels like this is the new page
  - client side routing => all the code is available when you load your page for the first time and when you click on about us it just render another component 

-- making the cards dynamic => if we click on the cards then it should render the restaurantMenu component which contains details about the restaurant
  - route /restaurant/redId => resId is dynamic associated with the card's id
  - useParams a hook provided by react-router-dom => to extract resId from the url
  - we have modified the backend mockdata and created a route which gives the details of the restaurant according to the restaurant id
  - still it is single page application, we are only rendering the body case wise
  - if you see the html in browser's console => you will not see Link tag, instead there will be anchor tag
  - link is wrapper above anchor tag => react-router-dom keep an eye on link tag and do not reload whole page 
  - behind the scene link uses anchor tag
  

