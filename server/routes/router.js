import { Router } from "express";
import { login, signup } from "../controller/auth.js";
const authRouter = Router();
authRouter.post("/login", login);
authRouter.post("/signup", signup);
export default authRouter;