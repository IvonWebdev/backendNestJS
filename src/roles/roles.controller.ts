import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.model';
import { CreateRoleDTO } from './dto/create-role.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {

    constructor(private rolesService: RolesService) { }

    @ApiOperation({ summary: 'Role Creation endpoint' })
    @ApiResponse({ status: 200, type: Role })
    @Post()
    create(@Body() roleDto: CreateRoleDTO) {
        return this.rolesService.createRole(roleDto)
    }

    @ApiOperation({ summary: 'Retrieve role by value' })
    @ApiResponse({ status: 200, type: Role })
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }
}
