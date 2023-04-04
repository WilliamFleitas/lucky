import { Router } from "express";
import rifaRoute from "./rifaRoute";
import userAuth from "./authRoute";
import ticketRoute from "./ticketRoute";
const routes = Router();
routes.use("/api/auth", userAuth);
routes.use("/api/rifa", rifaRoute);
routes.use("/api/ticket", ticketRoute);
export default routes;