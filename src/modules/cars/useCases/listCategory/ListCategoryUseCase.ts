import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
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
