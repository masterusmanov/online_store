import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsPhoneNumber, IsStrongPassword, MinLength } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ example: 'first_name', description: 'First name'})
    @IsString()
    readonly first_name?: string;

    @ApiProperty({ example: 'last_name', description: 'Last name'})
    @IsString()
    readonly last_Name?: string;

    @ApiProperty({ example: 'userName', description: 'Customer name'})
    @IsString()
    readonly username?: string;

    @ApiProperty({ example: '912345678', description: 'Customer phone number'})
    @IsPhoneNumber()
    readonly phoneNumber?: string;

    @ApiProperty({ example: 'P@$$w00rd', description: 'Customer password'})
    @IsStrongPassword()
    @MinLength(8)
    readonly password: string;

    @ApiProperty({ example: 'P@$$w00rd', description: 'Customer repeat password'})
    @IsStrongPassword()
    @MinLength(8)
    readonly confirmPassword: string;
}
