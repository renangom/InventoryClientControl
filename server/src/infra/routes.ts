import { Router } from "express";
import { prismaClient } from "./database/prismaClient";
import { UpdateUserController } from "../modules/User/update-user/update-user.controller";
import { GetUserController } from "../modules/User/get-user/get-user.controller";
import { LoginAcountController } from "../modules/Acount/login-Acount/loginAcount.controller";
import { CreateAcountController } from "../modules/Acount/create-Acount/create-acount.controller";
import { GetAcountController } from "../modules/Acount/get-Acount/getAcount.controller";
import { UpdateAccountController } from "../modules/Acount/update-Acount/updateAcount.controller";
import { accountRouter } from "./routes/accountRoutes";
import { userRouter } from "./routes/userRouter";
import { uploadRoutes } from "./routes/uploadRoutes";

export const routes = Router();

routes.use("/", accountRouter)
routes.use("/", userRouter)
routes.use('/', uploadRoutes)







