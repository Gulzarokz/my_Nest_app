import { Controller, Get, Injectable } from '@nestjs/common';
import { StudentService } from './student/student.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Weclome to Nest JS Course';
  }
}

@Controller('student')
export class StudentController {

}
