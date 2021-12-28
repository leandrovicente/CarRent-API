import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadExists) {
      throw new Error("Specfication Already Exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
