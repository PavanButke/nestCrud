import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookPipe } from "./data/pipes/book.pipe";

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
        console.log( bookId ,typeof(bookId))
        return this.bookServ.findBookbyIdService(bookId);
    }

    @Post('/add')
    addNewBook(@Body(new BookPipe) book : Book):string{
        return this.bookServ.addBookService(book);
    }
}