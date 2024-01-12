import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
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
    delteeBook(@Param("id") bookId: string): string{
        return this.bookServ.deleteBookService(bookId);
    }
    @Get('/findBookbyId/:id')
    getBookbyId(@Param("id") bookId: string): Book{
        return this.bookServ.findBookbyIdService(bookId);
    }

    @Post('/add')
    addNewBook(@Body() book : Book):string{
        return this.bookServ.addBookService(book);
    }
}