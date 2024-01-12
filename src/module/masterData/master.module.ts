import { Module } from '@nestjs/common';
import { MasterController } from './controllers/master.controller';
import { MasterService } from './services/master.service';

@Module({
  controllers: [MasterController],
  providers: [MasterService],
})
export class MasterModule {}
