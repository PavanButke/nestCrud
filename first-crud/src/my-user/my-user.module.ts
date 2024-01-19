import { Module } from '@nestjs/common';
import { MyUserService } from './my-user.service';
import { MyUserController } from './my-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyUser } from './entities/my-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MyUser])],
  controllers: [MyUserController],
  providers: [MyUserService],
})
export class MyUserModule {}
