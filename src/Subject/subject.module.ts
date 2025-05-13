import { Module, ValidationPipe } from "@nestjs/common";

import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Subject } from "./subject.entity";
import { subjectController } from "./subject.controller";
import { subjectService } from "./subject.service";

@Module({
    imports:[TypeOrmModule.forFeature([Subject])],
    providers: [
        {provide: APP_PIPE,
            useClass: ValidationPipe},
            subjectService
    ],
    
    controllers:[subjectController]

})
export class subjectModule { }