import { Test, TestingModule } from '@nestjs/testing';
import { MppingController } from './mpping.controller';
import { MppingService } from './mpping.service';

describe('MppingController', () => {
  let controller: MppingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MppingController],
      providers: [MppingService],
    }).compile();

    controller = module.get<MppingController>(MppingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
