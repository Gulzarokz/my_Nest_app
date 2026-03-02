import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students = [
        { id: 1, name: "Gulzar", age: 22 },
        { id: 2, name: "Ali", age: 25 }
    ];

}
