import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from '../../../dto/booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {}
