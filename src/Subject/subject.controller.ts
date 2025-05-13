import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { subjectService } from "./subject.service";
import { Subject } from "./subject.entity";
import { createSubjectDTO } from "./subjectDTO/createSubject.dto";

@Controller('subject')
export class subjectController{
    constructor(
        private readonly subjectSercive:subjectService
    ){}

    @Post('create')
    async createSubject(@Body() createSubjectDTO:createSubjectDTO):Promise<Subject>{
        return this.subjectSercive.createSubject(createSubjectDTO);
    }

    @Get('get-all')
    async getAllSubject():Promise<Subject[]>{
        return this.subjectSercive.getAllSubject();
    }

    @Get('get-byname')
    async getByName(@Body('subject_name') subject_name:string):Promise<Subject>{
        return this.subjectSercive.getBySubjectName(subject_name);
    }

    @Get('get-byid')
    async getById(@Body('subject_id') subject_id:string):Promise<Subject>{
        return this.subjectSercive.getBySubjectId(subject_id);
    }
}