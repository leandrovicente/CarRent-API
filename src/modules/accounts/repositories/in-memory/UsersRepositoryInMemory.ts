import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user)=> user.email === email); 
  }
  
  async findById(id: string): Promise<User> {
    return this.users.find((user)=> user.email === id); 
  }
}

export { UserRepositoryInMemory };
