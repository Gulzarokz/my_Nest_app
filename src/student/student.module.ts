import { Module } from '@nestjs/common';
import { StudentController } from 'src/app.service';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule { }
