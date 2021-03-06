import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {

  cars: Car[] = [];
  async create({
    name,
    description,
    daily_rate,
    brand,
    fine_amount,
    lincese_plate,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      brand,
      fine_amount,
      lincese_plate,
      category_id,
    });

    this.cars.push(car);
    return car;
  }

   async findByLincesePlate(lincese_plate: string): Promise<Car> {
    return this.cars.find((car) => car.lincese_plate === lincese_plate);
  }
}
export { CarsRepositoryInMemory };
