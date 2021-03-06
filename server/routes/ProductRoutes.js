import express from "express";
const router = express.Router();
import {list,show,create} from "../controllers/ProductsController";


router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);


export default router;
