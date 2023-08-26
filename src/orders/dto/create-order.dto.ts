import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({ example: '10.04.2023', description: 'Delivery date'})
    readonly delivery_date: string;

    @ApiProperty({ example: 'Status', description: 'about the situation'})
    @IsString()
    readonly status: string;

    @ApiProperty({ example: '1 or many', description: 'Order amount'})
    @IsNumber()
    readonly amount: number;

    @ApiProperty({ example: 'Total price', description: 'The total price of the order'})
    @IsString()
    readonly total_price: string;
}
