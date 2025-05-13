import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { subjectModule } from './Subject/subject.module';
import { questionBankModule } from './QuestionBank/questionBank.module';

@Module({
  imports: [
 TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://admin:phanhieu123@localhost:27017/exam?authSource=admin',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
  logging: true,
    }),
    subjectModule,questionBankModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
