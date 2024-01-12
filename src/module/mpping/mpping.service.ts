import { Injectable } from '@nestjs/common';
import { CreateMppingDto } from './dto/create-mpping.dto';
import { UpdateMppingDto } from './dto/update-mpping.dto';

@Injectable()
export class MppingService {
  create(createMppingDto: CreateMppingDto) {
    return 'This action adds a new mpping';
  }

  findAll() {
    return `This action returns all mpping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mpping`;
  }

  update(id: number, updateMppingDto: UpdateMppingDto) {
    return `This action updates a #${id} mpping`;
  }

  remove(id: number) {
    return `This action removes a #${id} mpping`;
  }
}
