import { Router } from "express";
import { resList } from "./mockData.js";

const router = Router();

router.route("/:resId").get((req, res) => {
  console.log(req.params.resId);
  const { resId } = req.params;
  const restaurant = resList.find((res) => res.info.id === resId);
  return res.status(200).json(restaurant);
});

export default router;
