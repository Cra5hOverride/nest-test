import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppingService } from './mpping.service';
import { CreateMppingDto } from './dto/create-mpping.dto';
import { UpdateMppingDto } from './dto/update-mpping.dto';

@Controller('mpping')
export class MppingController {
  constructor(private readonly mppingService: MppingService) {}

  @Post()
  create(@Body() createMppingDto: CreateMppingDto) {
    return this.mppingService.create(createMppingDto);
  }

  @Get()
  findAll() {
    return this.mppingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppingDto: UpdateMppingDto) {
    return this.mppingService.update(+id, updateMppingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppingService.remove(+id);
  }
}
