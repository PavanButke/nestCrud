import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User} from '../book/data/user.dto'
import { UserService } from "./user.service";
@Controller('/user')
export class UserController{
    
    constructor(private userServ: UserService ){}

    @Get('/findAll')
    getAllBooks(): User[]{
        return this.userServ.findAllUsers();
    }

    @Put('/update')
    updateBook(@Body() user: User): string{
        return this.userServ.updateUserService(user);
    }

    @Delete('/delete/:id')
    delteeBook(@Param("id") userId: string): string{
        return this.userServ.deleteUserService(userId);
    }
    @Get('/findUserbyId/:id')
    getBookbyId(@Param("id") userId: string): User{
        return this.userServ.findUserbyIdService(userId);
    }

    @Post('/add')
    addNewBook(@Body() user : User):string{
        return this.userServ.addUserService(user);
    }
}