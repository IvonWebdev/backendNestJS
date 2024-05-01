import { ApiProperty } from "@nestjs/swagger";

export class BanUserDTO {

    @ApiProperty({ example: '23', description: 'User ID' })
    readonly userId: number;

    @ApiProperty({ example: 'bacause of user is hater', description: 'Reason of ban' })
    readonly banReason: string;
}