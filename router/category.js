import express from "express";
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.js";

import {
  adminRequire,
  signinRequire,
  userProfile,
} from "../middleware/auth.js";
const router = express.Router();

router.get("/", getAllCategories);

router.post("/create", addCategory);

router.patch("/:id", updateCategory);

router.delete("/:id", deleteCategory);



export default router;
