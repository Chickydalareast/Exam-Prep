import { IsString } from "class-validator";

export class createSubjectDTO{
    @IsString()
    subject_name:string;
}