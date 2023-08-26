import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdatePaymentMethodDto {
    @ApiProperty({ example: 'cash or plastic card', description: 'Payment method'})
    @IsString()
    name?: string;
}