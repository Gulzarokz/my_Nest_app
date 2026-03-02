import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [EmployeeModule, CategoryModule, ControllerModule],
  controllers: [AppController, UsersController, ProductController,],
  providers: [AppService, ProductService,],
})
export class AppModule { }
