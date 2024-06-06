import { Router } from "express";
import { resList } from "./mockData.js";

const router = Router();

router.route("/restaurantData").get((req, res) => {
  return res.status(200).json(resList);
});

export default router;