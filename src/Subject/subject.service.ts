import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Subject } from "./subject.entity";
import { Repository } from "typeorm";
import { createSubjectDTO } from "./subjectDTO/createSubject.dto";
import { ObjectId } from "mongodb";

@Injectable()
export class subjectService {
    constructor(
        @InjectRepository(Subject)
        private readonly subjectRepository:Repository<Subject>

    ) { }

    async createSubject(createSubjectDTO:createSubjectDTO) :Promise<Subject>{
        const subject = this.subjectRepository.create(createSubjectDTO);
        return await this.subjectRepository.save(subject);
    }

    async getAllSubject():Promise<Subject[]>{
        return await this.subjectRepository.find();
    }

    async getBySubjectId(id:string):Promise<Subject>{
        const subject_id = new ObjectId(id);
        console.log(`Subject id: ${subject_id}`)
        const subject= await this.subjectRepository.findOne({where:{_id:subject_id}});
        if(!subject){
          console.log('Subject not found with subject_id:', subject_id);
      throw new Error('Subject is not found');
        }
        return subject;
    }

    async getBySubjectName(subject_name:string):Promise<Subject>{
        const subject= await this.subjectRepository.findOne({where:{subject_name}});
        if(!subject){
            throw new Error(`Subject is not found  ${subject_name}`)
        }
        return subject;
    }
}