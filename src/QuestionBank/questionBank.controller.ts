import { Body, Controller, Post } from "@nestjs/common";
import { questionBankService } from "./questionBank.service";
import { QuestionBank } from "./questionBank.entity";
import { createQuestionBankDTO } from "./questionBankDTO/createQuestionBank.dto";
import { debug } from "console";
import { ObjectId } from "mongodb";
@Controller('questionbank')
export class questionBankController {
    constructor(
        private readonly questionBankService: questionBankService
    ) { }

    @Post('create')
    async createQuestionBank(@Body()createQuestionBankDTO:createQuestionBankDTO):Promise<QuestionBank>{
        const {subject_id,...questBankData} =createQuestionBankDTO;
        if(subject_id){
            const subjectObjectID = new ObjectId(subject_id);
            return this.questionBankService.createQuestionBank(subjectObjectID,questBankData);
        }else{
            throw new Error("undefined subjectId")
        }
    }

}