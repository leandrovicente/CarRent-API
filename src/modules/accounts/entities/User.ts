import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity } from "typeorm";

@Entity("users")
class User {
  
  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_lincese: string;

  @Column()
  isAdimin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id =uuidV4();

    }
  }
}

export { User };
