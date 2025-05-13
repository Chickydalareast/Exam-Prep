import { QuestionBank } from "src/QuestionBank/questionBank.entity";
import { Column, Entity, ObjectIdColumn, OneToMany,ObjectId  } from "typeorm";

@Entity()
export class Subject{
    @ObjectIdColumn()
    _id:ObjectId;

    @Column()
    subject_name:string;

    @OneToMany(()=>QuestionBank,(bank)=>bank.subject)
    questionbanks:QuestionBank[];
}