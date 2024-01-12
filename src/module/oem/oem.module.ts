import { Module } from '@nestjs/common';
import { OemService } from './oem.service';
import { OemController } from './oem.controller';

@Module({
  controllers: [OemController],
  providers: [OemService],
  exports:[OemService]
})
export class OemModule {}
