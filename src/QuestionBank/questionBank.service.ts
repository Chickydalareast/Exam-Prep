import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionBank } from "./questionBank.entity";
import { createQuestionBankDTO } from "./questionBankDTO/createQuestionBank.dto";
import { Subject } from "src/Subject/subject.entity";
import { debug } from "console";
import { ObjectId } from "mongodb";

@Injectable()
export class questionBankService{
constructor(
    @InjectRepository(QuestionBank)
    private readonly questionBankRepository: Repository<QuestionBank>,

    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
){}

async createQuestionBank(subject_id:ObjectId,createQuestionBankDTO :object):Promise<QuestionBank>{
    const subject = await this.subjectRepository.findOne({where:{_id:subject_id}});
    debug(subject_id)
    if(!subject){
        throw new Error('Subject not found')
    }else{
        const questionBank = await this.questionBankRepository.create({...createQuestionBankDTO,subject: subject})
        return this.questionBankRepository.save(questionBank);
    }
}
}