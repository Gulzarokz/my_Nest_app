import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(){
    whiteList: true, // remove properties that are not in the DTO
    forbidNonWhiteListed: true, // throw an error if properties that are not in the DTO are present
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
