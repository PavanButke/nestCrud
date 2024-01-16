import { Injectable } from "@nestjs/common";
import { User } from "../book/data/user.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UserService{
    

    public users: User[]=[];

    addUserService(user : User):string{
        user.id = uuidv4();
        this.users.push(user);
        return "User added successfuly."
    }

    updateUserService(user : User):string{
      let idx= this.users.findIndex(myUser=>{
            return myUser.id == user.id;
      })
      this.users[idx]=user;
      return "User has been updated successfuly."
    }

    deleteUserService(userId : string):string{
        this.users = this.users.filter((bk)=>
           {  bk.id !== userId; 
            
        })
        return "User has been deleted successfuly."
      }

      findUserbyIdService(userId : string):User{
        const foundUser = this.users.find((bk) => bk.id === userId);
        return foundUser;
      }

      findAllUsers(): User[]{
        return this.users;
      } 

      findUserbyNameService(username : string):User{
        const foundUser = this.users.find((bk) => bk.username === username);
        return foundUser;
      }

}