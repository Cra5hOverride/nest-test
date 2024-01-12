import { Test, TestingModule } from '@nestjs/testing';
import { MppingService } from './mpping.service';

describe('MppingService', () => {
  let service: MppingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MppingService],
    }).compile();

    service = module.get<MppingService>(MppingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
