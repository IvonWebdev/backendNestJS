import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { User } from 'src/users/users.model';
import { Post } from './posts.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';

@Module({
    providers: [PostsService],
    controllers: [PostsController],
    imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
