import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

describe('UserService', () => {
  let service: UserService;

  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create', async () => {
    const createUserDto = {
      firstName: 'Chadwick',
      lastName: 'Boseman',
    } as CreateUserDto;

    const user = {
      firstName: 'Chadwick',
      lastName: 'Boseman',
    } as User;

    jest.spyOn(mockUserRepository, 'save').mockReturnValue(user);

    // act
    const result = await service.create(createUserDto);

    // assert
    expect(mockUserRepository.save).toHaveBeenCalled();
    expect(mockUserRepository.save).toHaveBeenCalledWith(createUserDto);

    expect(result).toEqual(user);

  });

  it('findAll', async () => {

    const user = {
      firstName: 'Chadwick',
      lastName: 'Boseman',
    };
    const users = [user];
    jest.spyOn(mockUserRepository, 'find').mockReturnValue(users);

    //act
    const result = await service.findAll();

    // assert
    expect(result).toEqual(users);
    expect(mockUserRepository.find).toHaveBeenCalled();
  });
  // it('findOne', () => {});
  // it('update', () => {});
  // it('remove', () => {});
});
