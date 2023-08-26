import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @ApiProperty({ example: 'cash or plastic card', description: 'Payment method'})
    @IsString()
    readonly name: string;
}