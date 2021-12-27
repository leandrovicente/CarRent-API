import { Request , Response} from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController{

  constructor(private listCategoryRepository : ListCategoryUseCase){}

  handle(request:Request,response: Response):Response { 
    const all  = this.listCategoryRepository.execute();

    return response.json(all);
  }
}

export{ListCategoryController}