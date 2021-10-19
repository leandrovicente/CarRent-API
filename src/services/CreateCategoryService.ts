import { ICategoriesRepository } from "../repositories/ICategoriesRepository";


interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoryRepository:ICategoriesRepository){}
    execute({name,description}:IRequest){
        const categoryAlreadExists = this.categoryRepository.findByName(name);

        if(categoryAlreadExists){
            throw new Error("Category Already Exists!")
        }

        this.categoryRepository.create({name,description})
    }
}

export{CreateCategoryService}