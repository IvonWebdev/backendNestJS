import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {

    @ApiProperty({ example: 'some@email.com', description: 'User email' })
    readonly email: string;

    @ApiProperty({ example: 'password', description: 'Password' })
    readonly password: string;
}