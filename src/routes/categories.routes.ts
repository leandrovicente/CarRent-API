import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryUseCase } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoryUseCase.handle(request, response);
});

export { categoriesRoutes };
