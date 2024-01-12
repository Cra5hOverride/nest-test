import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterDto } from '../../../dto/master.dto';

export class UpdateMasterDto extends PartialType(CreateMasterDto) {}
