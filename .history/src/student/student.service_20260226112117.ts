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
        const student = this.students.find((s) => s.id === id);
        if (!student) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        return student;
    }
    //post method to add student
    createStudent(data: { name: string; age: number }) {
        const newStudent = {
            id: Date.now(), // generate a unique id based on timestamp
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }

}
