Episode 3

Configured scripts package.json
"scripts": {
"start":"parcel index.html",
"build": "parcel build index.html",
"test": "jest"
},
This will minify the command to run and build the app.
npm run start == npm start == npx parcel index.html

React.createElement is an object and when we render the element then it becomes an html element.
// Creating react element like this will become too clumsy to work on. That is why facebook developers build JSX to tackle this problem.
// But this piece of code is core of React.
// JSX is not a part of React. Both these things are different. JSX make developers life easy

--JSX
JSX Code => const jsxHeading = <h1 id="Heading">Namaste React using JSX</h1>
Lot of developers think that JSX is html inside javascript but this is not the case. Instead jsx is HTML-like or XML-like syntax.
This JSX code is equivalent to this "const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Namaste React using createElement!!");"
Line 18 is creating a react element using JSX and line 20 is creating a react element using Core React.

Line 18 is not a pure valid javascript, if you try to run this line inside the browser's console then it will throw an error. So how this is working in the app.js file.
Parcel is doing the job for us. The code is transpiled before it goes to the js engine (browser).

--Babel
Babel converts the jsx to core react.
It also converts the es6 to browser understanble form for the older version of the browsers.

--JSX Syntax
const jsxHeading = <h1 className="Class-A" tabIndex="8" >Hi this is master piece of engineering!!</h1>
You have to use camelcase for the attributes. A bit difference in html and jsx. Explore syntax of different attributes in jsx.

--React Component
Everything is react is components for example - header, footer, card, searchbar, input box, button, everything are react components.

Types of React components

1. Class based component - OLD - Uses JS Classes - Hardly used now-a-days.
2. Functional component - NEW - Uses JS function - Its a normal Js function that return some piece of jsx code.

--Functional component syntax => Its a basic javascript function
const HeadingComponent = () => { return <h1>Namaste React using functional component</h1> };
const HeadingComponent1 = () => ( <h1> Namaste React using functional component !!</h1> );
root.render(<HeadingComponent/>) => This is how react components is rendered, babels understand this way.

Now you can play with react elements and react components

1. react element inside react element
   const element = ( <h1> {jsxHeading} Namaste React</h1> )
2. react element inside react component
   const Component = () => ( <div className="container"> {jsxHeading} </div> )
3. react component inside react element
   const element = ( <h1> <Component/> Namaste React</h1> )
4. react component inside react component
   const Test = () => { return ( <div className="Container"> <HeadingComponent /> </div> ); };

Now we have the capabilities to run any piece of js code inside the jsx or component using curly brackets
const data = Api_Call_Is_Made;
Assume this api sends some malicious code that will be run inside the component. This way attacker can steal private information about the laptop, localstorage and many more.
But jsx is super amazing, it does not run the js code blindly inside the component rather it sanitizes the code and prevents from this kind of attack.

Another way of writing components inside components
const Component2 = () => { return ( <div> {Component()} <Component></Component> <h1>Namaste React</h1> </div> ); };
{Component()} == <Component></Component> == </Component>
Why react is readable ? => Because of jsx
Why react is fast ? => Parcel and Babel doing the job for the react.