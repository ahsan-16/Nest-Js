import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { timingSafeEqual } from 'crypto';

@Controller('student')
export class StudentController {
    constructor (private readonly studentservice: StudentService){};

    @Get()
    getALL(){
        return this.studentservice.getAllStudent();
    }

    @Get(':id')
    getById(@Param('id') id:string){
        return this.studentservice.getStudentById(Number(id))
    }

    @Post()
    create(@Body()body: {name:string; age:number}){
        return this.studentservice.createStudent(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:{name:string; age: number}){
        return this.studentservice.updateStudent(Number(id),body);
    }
    @Patch(':id')
    patch(@Param('id') id: string, @Body() body: Partial<{name: string; age:number}>){
        return this.studentservice.patchStudent(Number(id),body);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.studentservice.deleteStudent(Number(id))
    }
}
