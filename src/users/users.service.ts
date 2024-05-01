import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDTO } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDTO } from './dto/add-role.dto';
import { BanUserDTO } from './dto/ban-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService
    ) { }

    async createUser(dto: CreateUserDTO) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({
            include: {
                all: true
            }
        });
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }

    async addRole(dto: AddRoleDTO) {
        const user = await this.userRepository.findByPk(dto.userId);


        const role = await this.roleService.getRoleByValue(dto.value);
        if (user && role) {
            await user.$add('roles', [role.id]);
            return dto;
        }
        throw new HttpException('Something wrong happened', HttpStatus.NOT_FOUND);
    }

    async banUser(dto: BanUserDTO) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (user) {
            user.banned = true;
            user.banReason = dto.banReason;
            await user.save();
            return user;
        }
        throw new HttpException('Something wrong happened2', HttpStatus.NOT_FOUND);
    }
}
