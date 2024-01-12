import { Module } from '@nestjs/common';
import { MppingService } from './mpping.service';
import { MppingController } from './mpping.controller';

@Module({
  controllers: [MppingController],
  providers: [MppingService],
})
export class MppingModule {}
