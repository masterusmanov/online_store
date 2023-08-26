import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreatePaymentDto {
    @ApiProperty({ example: '2290000 or 200$', description: 'Payment amount'})
    @IsNumber()
    readonly paymentAmount: number;
}
