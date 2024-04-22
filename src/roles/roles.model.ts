import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "./user-roles.model";
import { User } from "src/users/users.model";

interface IRoleCreationAttr {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, IRoleCreationAttr> {

    @ApiProperty({ example: '1', description: 'Uniq identifier' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Role name' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: 'Admin user', description: 'some role description' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
