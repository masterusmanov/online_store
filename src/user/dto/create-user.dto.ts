import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsPhoneNumber } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'first_name', description: 'First name'})
    @IsNotEmpty()
    @IsString()
    readonly first_name: string;

    @ApiProperty({ example: 'last_name', description: 'Last name'})
    @IsNotEmpty()
    @IsString()
    readonly last_name: string;

    @ApiProperty({ example: 'userName', description: 'Customer name'})
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @ApiProperty({ example: 'customer@email.uz', description: 'Customer email'})
    @IsEmail()
    readonly email: string;
    
    @ApiProperty({ example: '912345678', description: 'Customer phone number'})
    @IsPhoneNumber()
    readonly phoneNumber: string;
    
    @ApiProperty({ example: 'P@$$w00rd', description: 'Customer password'})
    @IsStrongPassword()
    @MinLength(8)
    readonly password: string;

    @ApiProperty({ example: 'P@$$w00rd', description: 'Customer repeat password'})
    @IsStrongPassword()
    @MinLength(8)
    readonly confirmPassword: string;
}
