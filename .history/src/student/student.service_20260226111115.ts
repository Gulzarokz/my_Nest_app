import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students = [
        { id: 1, name: "Gulzar", age: 22 },
        { id: 2, name: "Ali", age: 25 }
    ];

    getAllStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        return this.students.find((s) => s.id === id);
        if (!student) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
    }

}
