import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from 'src/book/data/user.dto';

@Controller('/app')
export class AppController{
    @Get('/auth')
    @UseGuards(AuthGuard('local'))
    getUserbyName(@Request() req): User{
        return  req.User;
    }
}