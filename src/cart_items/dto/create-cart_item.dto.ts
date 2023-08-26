import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCartItemDto {
    @ApiProperty({ example: '1 or many', description: 'quantity of basket items'})
    @IsNumber()
    readonly amount: number;
}
