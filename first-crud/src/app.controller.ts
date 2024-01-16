import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('/app')
export class AppController{
    @Get('/auth')
    @UseGuards(AuthGuard('local'))
    getUserbyName(): string{
        return "Checking Authentication";
    }
}