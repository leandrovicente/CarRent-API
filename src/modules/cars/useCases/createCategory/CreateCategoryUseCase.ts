import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject,injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest) : Promise<void> {
    const categoryAlreadExists = await this.categoryRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new Error("Category Already Exists!");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
