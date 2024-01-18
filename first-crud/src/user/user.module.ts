import { Controller, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ConfigService } from "@nestjs/config";

@Module(
    {
        imports: [],
        controllers: [UserController],
        providers: [UserService],
        exports: [UserService]
    }
)
export class UserModule{
    constructor(private readonly configServ: ConfigService)
    {
        console.log("This is from UserModule "+ configServ.get<Number>("PORT"))
        console.log("This is from UserModule "+configServ.get<Number>("LOGGING"))
    }
}