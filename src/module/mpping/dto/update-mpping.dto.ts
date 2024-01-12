import { PartialType } from '@nestjs/mapped-types';
import { CreateMppingDto } from './create-mpping.dto';

export class UpdateMppingDto extends PartialType(CreateMppingDto) {}
