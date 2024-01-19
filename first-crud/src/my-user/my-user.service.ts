import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMyUserDto } from './dto/create-my-user.dto';
import { UpdateMyUserDto } from './dto/update-my-user.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { MyUser } from './entities/my-user.entity';

@Injectable()
export class MyUserService {
  constructor(@InjectRepository(MyUser) private readonly userRepository : Repository<MyUser>){

  }


  create(createMyUserDto: CreateMyUserDto) : Promise<MyUser>{
    let user : MyUser = new MyUser();
    user.firstName = createMyUserDto.firstName;
    user.lastName = createMyUserDto.lastName;
    user.age = createMyUserDto.age;
    return this.userRepository.save(user);
  }

  findAll(): Promise<MyUser[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<MyUser> {
    return this.userRepository.findOne({ where: { id } });
  }
  
  async update(id: number, updateMyUserDto: UpdateMyUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      // Handle the case where the user with the given id is not found
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    //let user : MyUser = new MyUser();
    user.firstName = updateMyUserDto.firstName;
    user.lastName = updateMyUserDto.lastName;
    user.age = updateMyUserDto.age;
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
