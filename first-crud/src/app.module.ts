import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BookModule , UserModule , AuthModule, DatabaseModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: ".local.env"
      //envFilePath: ".prod.env"
    })
  ],
  controllers: [AppController],
  providers: [],
  
})
export class AppModule {}
