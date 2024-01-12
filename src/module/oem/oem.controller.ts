import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OemService } from './oem.service';
import { CreateOemDto } from './dto/create-oem.dto';
import { UpdateOemDto } from './dto/update-oem.dto';

@Controller('oem')
export class OemController {
  constructor(private readonly oemService: OemService) {}

  @Post()
  create(@Body() createOemDto: CreateOemDto) {
    return this.oemService.create(createOemDto);
  }

  @Get()
  findAll() {
    return this.oemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOemDto: UpdateOemDto) {
    return this.oemService.update(+id, updateOemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oemService.remove(+id);
  }
}
