import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class UpdateCartItemDto{
    @ApiProperty({ example: '1 or many', description: 'quantity of basket items'})
    @IsNumber()
    amount?: number;
}
