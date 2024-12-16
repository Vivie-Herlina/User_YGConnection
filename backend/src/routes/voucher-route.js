import express from "express";
import Voucher from "../controllers/voucher-controller.js";

const VoucherRouter = express.Router();

VoucherRouter.get("/:id", Voucher.show);

export default VoucherRouter;
