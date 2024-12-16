import express from "express";
import Product from "../controllers/product-controller.js";
import { UploadMiddlware } from "../utils/middleware.js";

const ProductRouter = express.Router();
const upload = UploadMiddlware();

// get all product
ProductRouter.get("/", Product.index);

ProductRouter.get("/category/:name", Product.index);

// insert product
ProductRouter.post("/", upload, Product.store);

// show product by id
ProductRouter.get("/:id", Product.show);

// update product
ProductRouter.put("/:id", Product.update);

// delete product
ProductRouter.delete("/:id", Product.destroy);

export default ProductRouter;
