import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDTO {

    @ApiProperty({ example: 'ADMIN', description: 'Role value' })
    readonly value: string;

    @ApiProperty({ example: 'Administrator role', description: 'Role desc' })
    readonly description: string;
}