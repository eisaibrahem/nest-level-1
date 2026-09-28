import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto.js';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

    @IsInt()
    @IsNotEmpty()
    id?: number;

    @IsString()
    @IsNotEmpty()
    status?: string;

    @IsNumber()
    amount?: number;

    @IsString()
    @IsNotEmpty()
    title?: string;
}
