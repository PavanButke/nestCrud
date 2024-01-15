import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";


@Controller('/book')
export class BookController{
    constructor(private bookServ: BookService ){}

    @Get('/findAll')
    getAllBooks(): Book[]{
        return this.bookServ.findAllBooks();
    }

    @Put('/update')
    updateBook(@Body() book: Book): string{
        return this.bookServ.updateBookService(book);
    }

    @Delete('/delete/:id')
    delteeBook(@Param("id" , ParseIntPipe) bookId: number): string{
        console.log( bookId ,typeof(bookId))
        return this.bookServ.deleteBookService(bookId);
    }
    @Get('/findBookbyId/:id')
    getBookbyId(@Param("id" , ParseIntPipe) bookId: number): Book{
        throw new BadRequestException({
            status: 405,
            eror: "This is a Custom Exception."
        });
        return this.bookServ.findBookbyIdService(bookId);
    }

    @Post('/add')
    addNewBook(@Body(new ValidationPipe()) book : Book):string{
        return this.bookServ.addBookService(book);
    }
}