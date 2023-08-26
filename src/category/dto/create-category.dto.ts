import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({ example: 'Household appliances', description: 'Product category'})
    @IsString()
    readonly product_category: string;

    @ApiProperty({ example: 'Refrigerator', description: 'Description'})
    @IsString()
    readonly description: string;
}
