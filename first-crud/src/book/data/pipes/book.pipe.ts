import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Book } from "../book.dto";
import { validate } from "class-validator";

export class BookPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const bookClass = plainToInstance(Book , value);
        const errors= await validate(bookClass);
        if(errors.length > 0)
        {
            throw new BadRequestException("Validation Failed" + JSON.stringify(errors))
        }
        
         return value

    } 
    
}