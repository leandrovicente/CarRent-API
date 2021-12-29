import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject,injectable } from "tsyringe";

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {

    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
