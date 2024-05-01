import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDTO {

    @ApiProperty({ example: 'some@email.com', description: 'User email' })
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, { message: 'Incorrect email' })
    readonly email: string;

    @ApiProperty({ example: 'password', description: 'Password' })
    @IsString({ message: 'Must be a string' })
    @Length(6, 20, { message: 'Must be between 6 and 20 characters' })
    readonly password: string;
}