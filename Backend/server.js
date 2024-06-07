import express from "express";
import cors from "cors";
import RestaurantRouter from "./routes.js";
import MenuRouter from "./menu.routes.js";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

try {
  app.listen(3000, () => {
    console.log(`Server listening at port :3000`);
  });
} catch (error) {
  console.log("Connection Failed", error);
}

app.use("/api", RestaurantRouter);
app.use("/restaurantMenu", MenuRouter);
