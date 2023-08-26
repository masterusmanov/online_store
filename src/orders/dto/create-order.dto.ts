import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsNumber } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({ example: '10.04.2023', description: 'Delivery date'})
    readonly deliveryDate: string;

    @ApiProperty({ example: 'Status', description: 'about the situation'})
    @IsString()
    readonly status: string;

    @ApiProperty({ example: '1 or many', description: 'Order amount'})
    @IsNumber()
    readonly amount: number;

    @ApiProperty({ example: 'Total price', description: 'The total price of the order'})
    @IsString()
    readonly totalPrice: string;

    @ApiProperty({ example: 'Tashkent city, Chilonzor district, street Qatortol', description: 'Order address'})
    @IsString()
    readonly address: string;

    @ApiProperty({ example: '160900', description: 'Postal code of the customer'})
    @IsNumber()
    readonly zipCode: string;
}
