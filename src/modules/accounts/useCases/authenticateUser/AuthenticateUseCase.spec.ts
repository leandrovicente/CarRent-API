import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });
  it("should be able to authenticate an user", async ()=>{
    const user : ICreateUserDTO={
      driver_license : "0123",
      email : "email@test.com",
      password:"1234",
      name: "test"
    }
    
    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email:user.email,
      password:user.password
    });

    expect(result).toHaveProperty("token")
  });

  it("should not be able to authenticate an not exist user", async ()=>{
    expect(async()=>{
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password:"123"
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorret password", async ()=>{
    expect(async()=>{
      const user : ICreateUserDTO={
        driver_license : "0123",
        email : "email@test.com",
        password:"1234",
        name: "test"
      }
      
      await createUserUseCase.execute(user)
  
      await authenticateUserUseCase.execute({
        email: user.email,
        password:"incorrect password"
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
