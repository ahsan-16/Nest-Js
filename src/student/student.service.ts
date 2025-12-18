import { Injectable, NotFoundException } from '@nestjs/common';
import { find, retry } from 'rxjs';

@Injectable()
export class StudentService {
    private student = [
        {id:1, name: 'Ahsan', age:20},
        {id:2, name: 'hanan', age:22},
    ];
     //GET
    getAllStudent(){
        return this.student;
    }

    getStudentById(id: number){
        const student = this.student.find((s) => s.id === id);
        if(!student) throw new NotFoundException('Student not found');
        return student
    }
    //POST
    createStudent(data: {name: string; age: number}){
        const newStudent = {
            id: Date.now(),
            ...data
        };
        this.student.push(newStudent);
        return newStudent;
    }
    //PUT
    updateStudent(id: number, data: {name: string; age: number}){
        const index = this.student.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException('Student not found');
        this.student[index] = {id, ...data};
        return this.student[index];
    }
    //PATCH
    patchStudent(id: number, data: Partial<{name: string; age: number}>){
        const student= this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }
    //DELETE
    deleteStudent(id: number){
        const index = this.student.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException('Student not found');
        const deleted = this.student.splice(index,1);
        return {message: 'Student Deleted', student: deleted[0]}
    }
}
