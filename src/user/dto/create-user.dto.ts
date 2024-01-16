import {
    IsNotEmpty, 
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsNotEmpty()
    @ApiProperty()
    lastName: string;
}
