import express from "express";
import AuthRouter from "./auth-route.js";
import ProductRouter from "./product-route.js";
import ArtistRouter from "./artist-route.js";
import EventRouter from "./event-route.js";
import UserRouter from "./user-route.js";
import MemberRouter from "./member-route.js";
import CheckoutRouter from "./checkout-route.js";
import CategoryRouter from "./category-route.js";
import OrderRouter from "./order-route.js";
import TransactionRouter from "./transaction-route.js";
import Payment from "../controllers/payment-controller.js";
import PointRouter from "./point-route.js";
import VoucherRouter from "./voucher-route.js";

const router = express.Router();

// autentication route
router.use("/api/auth", AuthRouter);

// products route
router.use("/api/products", ProductRouter);

// artists route
router.use("/api/artist", ArtistRouter);

// events route
router.use("/api/event", EventRouter);

// member route
router.use("/api/member", MemberRouter);

// checkout router
router.use("/api/checkout", CheckoutRouter);

// categiry router
router.use("/api/category", CategoryRouter);

// order router
router.use("/api/order", OrderRouter);

// Transaction router
router.use("/api/transaction", TransactionRouter);

// payment router
router.use("/api/payment", Payment.store);

// point router
router.use("/api/point", PointRouter);

// users router
router.use("/api/profile", UserRouter);

router.use("/api/voucher", VoucherRouter);

export default router;
