import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest) : Promise<void> {
    const categoryAlreadExists = await this.categoryRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new Error("Category Already Exists!");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
