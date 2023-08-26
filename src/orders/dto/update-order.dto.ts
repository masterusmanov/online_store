import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsNumber } from "class-validator";

export class UpdateOrderDto {
    @ApiProperty({ example: '10.04.2023', description: 'Delivery date'})
    @IsDate()
    delivery_date?: Date;

    @ApiProperty({ example: 'Status', description: 'about the situation'})
    @IsString()
    status?: string;
    
    @ApiProperty({ example: '1 or many', description: 'Order amount'})
    @IsNumber()
    amount?: number;
    
    @ApiProperty({ example: 'Total price', description: 'The total price of the order'})
    @IsString()
    total_price?: string;
}