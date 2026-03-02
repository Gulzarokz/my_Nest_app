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
  constructor(private readonly studentService: StudentService) { };

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id))
  }

  @Post()
  createStudent(@Body() Body: { name: string; age: number }) {
    return this.studentService.createStudent(Body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; age: number }) {
    return this.studentService.updateStudent(Number(id), body);
  }

  @Patch('id')
  patch(@Param('id') id: string, @Body() body: Partial<{ name: string; age: number }>) {
    return this.studentService.patchStudent(Number(id), body)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}


