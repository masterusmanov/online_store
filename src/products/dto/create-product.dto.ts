import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class CreateProductDto {
    @ApiProperty({ example: 'Computer or phone', description: 'Product name'})
    @IsString()
    readonly product_name: string;

    @ApiProperty({ example: '2290000 sum or 200$', description: 'Product price'})
    @IsString()
    readonly price: string;

    @ApiProperty({ example: 'Stock', description: 'Stock'})
    @IsString()
    readonly stock: string;
}
