import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { KafkaProducerService } from '../kafka/kafka-producer.service';

@Injectable()
export class SchedulerTask {
  private readonly logger = new Logger(SchedulerTask.name);

  constructor(private readonly kafka: KafkaProducerService) {}

  // Runs every 10 minutes
  @Cron('*/10 * * * *')
  async handleCron() {
    this.logger.log('Triggering order completion task via Kafka');
    await this.kafka.emit('order.mark-completed', { action: 'mark-completed' });
  }
}
