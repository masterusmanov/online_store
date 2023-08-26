import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class CreateProductDto {
    @ApiProperty({ example: 'Computer or phone', description: 'Product name'})
    @IsString()
    readonly productName: string;

    @ApiProperty({ example: 'New or Different', description: 'The product is new or used'})
    @IsString()
    readonly newOrDifferent: string;

    @ApiProperty({ example: '2290000 sum or 200$', description: 'Product price'})
    @IsString()
    readonly price: string;

    @ApiProperty({ example: 'Stock', description: 'Stock'})
    @IsString()
    readonly stock: string;

    @ApiProperty({ example: 'ID', description: 'category id'})
    @IsNumber()
    readonly categoryId: number;
}
