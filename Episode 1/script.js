// In scripts try to give each variable a unique name
// Creating an element is core react thing whereas manipulating DOM is ReactDOM thing (Use React and ReactDOM properly)

const heading = React.createElement("h1", { id: "Heading", xyz: "abc" }, "Hello World from React!!");

console.log(heading) // heading is a js object
// {} contains the attribute to the tag

const React_root = ReactDOM.createRoot(document.getElementById("react_root"));

React_root.render(heading); // takes the object and converts into browser understandable form



/**
 * How to create this nested structure using react ?
 * <div id="parent">
    <div id="child">
      <h1>
        
      </h1>
    </div>
  </div>
 * **/

const parent = React.createElement("div", { id: "parent" },
  React.createElement("div", { id: "child" },
    React.createElement("h1", {}, "This is the nested heading using React")));

React_root.render(parent);  // if we render this then above heading render will be overwritten

/**
 * How to add siblings of heading in the above structure?
 * Ans - The third argument can be given as an array of node 
 * **/

const siblings = React.createElement("div", { id: "parent" },
  React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "This is the nested h1 heading using React"), React.createElement("h2", {}, "This is the nested h2 heading using React")]));

// We will get an error of "Key" in the console section of the browser but for now ignore it, we will understand it latter on

React_root.render(siblings); // this render will overwrite the above renderings

// IMP1
// IF we write this type of structure then it will become too messy and not easy to read
// This is why JSX is used to simplify the structure of tags that we write
// But yeah react can be written in js file too.

// IMP2
// Order of the script means files will matter, if you have not connected react with CDN and or have imported it after the file that you want to run which uses the react then you will get an error.

// IMP3
// First the html that you have written inside the body is executed (line by line) then the scripts will be executed (line by line) and react render will replace the already existed tags.