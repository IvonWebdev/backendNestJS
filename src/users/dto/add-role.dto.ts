import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDTO {

    @ApiProperty({ example: 'ADMIN', description: 'User role' })
    readonly value: string;

    @ApiProperty({ example: '23', description: 'User ID' })
    readonly userId: number;
}