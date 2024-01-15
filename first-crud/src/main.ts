import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { BookGuard } from './book/data/book.guard';

function globalMiddleWareOne(req: Request , res: Response , next: NextFunction)
{
    console.log("This global middleware 1.");
    next()
}


function globalMiddleWareTwo(req: Request , res: Response , next: NextFunction)
{
    console.log("This global middleware 2.");
    next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  app.useGlobalGuards(new BookGuard());
  await app.listen(5000);
}
bootstrap();
