import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateMasterDto } from '../../../dto/master.dto';
import { UpdateMasterDto } from '../models/update.req';
import { MasterService } from '../services/master.service';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Post()
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  @Get()
  findAll() {
    return this.masterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.masterService.update(+id, updateMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterService.remove(+id);
  }
}
