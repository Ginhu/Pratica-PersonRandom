import { personController } from "../controller/controller"
import { Router } from "express"

const personRouter = Router()

personRouter.get("/person", personController)

export default personRouter