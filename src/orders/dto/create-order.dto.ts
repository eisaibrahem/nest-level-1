import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateOrderDto {
  @IsInt()
  userId: number;

  @IsInt()
  orderNumber: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  amount: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}
