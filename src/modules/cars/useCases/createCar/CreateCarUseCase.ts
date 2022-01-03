import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  lincese_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    lincese_plate,
    fine_amount,
    brand,
    category_id,
  }: IRequest): Promise<Car > {
    const carsAlreadyExists = await this.carsRepository.findByLincesePlate(
      lincese_plate
    );

    if (carsAlreadyExists) {
      throw new AppError("Car already exists!");
    }

    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      lincese_plate,
      fine_amount,
      brand,
      category_id,
    });

    return car;
  }
}

export { CreateCarUseCase };
