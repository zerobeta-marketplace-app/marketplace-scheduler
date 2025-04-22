import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaProducerService } from './kafka/kafka-producer.service';
import {SchedulerTask } from './tasks/order-complete.task';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  controllers: [AppController],
  imports: [ScheduleModule.forRoot()],
  providers: [AppService , SchedulerTask, KafkaProducerService],
})
export class AppModule {}
