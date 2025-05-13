import { IsEmpty, IsMongoId, IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class createQuestionBankDTO{
    @IsString()
    questionBank_name:string;
    @IsString()
    questionBank_description:string;
    @IsMongoId()
    subject_id:string;
}