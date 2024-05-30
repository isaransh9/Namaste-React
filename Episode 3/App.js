import React from "react";
import ReactDOM from "react-dom/client";

// Creating react element like this will become too clumsy to work on. That is why facebook developers build JSX to tackle this problem.
// But this piece of code is core of React.
// JSX is not a part of React. Both these things are different. JSX make developers life easy

// Core React
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Namaste React using createElement!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX code is transpiles before it goes to js engine or browser using parcel which uses babel.
// JSX => React.createElement (Transpiled) => react-element (Object) => HTMLElement (Render)
const jsxHeading = (
  <h1 className="jsx" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// If you are an element of jsx in more than one line then wrap up that element in round-brackets, so that babel understands it.
const jsxHeading1 = <h1>Namaste React using jsx @@</h1>;

// jsxHeading object and heading object are same
root.render(jsxHeading1);

// functional react component (it must start with a capital letter)
const HeadingComponent = () => {
  return <h1>Namaste React</h1>;
};

// Component Composition
const TitleComponent = () => (
  // valid functional component
  <div className="Container">
    <h1>Its a TitleComponent</h1>
    <HeadingComponent />
  </div>
);
// These above two are valid syntax

// This is how React component is rendered
// root.render(<TitleComponent />);

// You can inject any piece of js code into the jsx component => Super Power of JSX
const Test = () => {
  return (
    <div className="Container">
      <HeadingComponent />
      <h2>{100 + 200}</h2>
    </div>
  );
};

// How can i put react element inside my component (react element is javascript only which we can write inside the react component using {} )
const Component = () => <div className="container">{jsxHeading}</div>;

// React element and component inside react element
const element = (
  <h1>
    {jsxHeading}
    <Component />
    Namaste React
  </h1>
);

// Another way of writing component inside component
const Component2 = () => {
  return (
    <div>
      {Component()}
      <Component></Component>
      <h1>Namaste React</h1>
    </div>
  );
};

root.render(element);
