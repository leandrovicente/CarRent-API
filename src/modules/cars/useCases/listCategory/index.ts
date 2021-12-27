import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository =  CategoriesRepository.getInstance();
const listCategoryController = new ListCategoryUseCase(categoriesRepository);
const listCategoryUseCase = new ListCategoryController(listCategoryController);

export { listCategoryUseCase };
