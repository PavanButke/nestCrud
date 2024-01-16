import { Controller, Module } from "@nestjs/common";
import { AuthLocalPaassportStrategy } from "./passport.local.strategy";
import { UserModule } from "src/user/user.module";


@Module(
    {
        imports: [UserModule],
        controllers: [],
        providers: [AuthLocalPaassportStrategy],
        exports: []
    }
)
export class AuthModule{

}