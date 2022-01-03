import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post("/", createCarController.handle);

export { carsRoutes };
