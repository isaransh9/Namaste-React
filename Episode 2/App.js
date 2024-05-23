import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "Heading", xyz: "abc" }, "Hello World from React Parcel!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);