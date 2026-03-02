import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { ControllerModule } from './controller/controller.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, ControllerModule],
  controllers: [AppController, UsersController, ProductController, StudentController],
  providers: [AppService, ProductService, StudentService],
})
export class AppModule {}
