import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionBank } from "./questionBank.entity";
import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { questionBankService } from "./questionBank.service";
import { questionBankController } from "./questionBank.controller";
import { Subject } from "src/Subject/subject.entity";

@Module({
    imports:[TypeOrmModule.forFeature([QuestionBank,Subject])],
    providers: [
        {provide: APP_PIPE,
            useClass: ValidationPipe},
            questionBankService
    ],
    
    controllers:[questionBankController]

})
export class questionBankModule { }