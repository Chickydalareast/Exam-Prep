
import { Subject } from "src/Subject/subject.entity";
import { Column, Entity, ManyToOne, ObjectIdColumn,ObjectId  } from "typeorm";

@Entity()
export class QuestionBank{
@ObjectIdColumn()
_id:ObjectId;
@Column()
questionBank_name:string;
@Column()
questionBank_description:string;
@Column()
questionBank_date:Date;
@ManyToOne(()=>Subject,(subject)=>subject.questionbanks,{onDelete:"CASCADE"})
subject:Subject;


}