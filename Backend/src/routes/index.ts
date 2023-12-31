import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatsRoutes from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes);
appRouter.use("/chat", chatsRoutes);

export default appRouter;