import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post) private postRepository: typeof Post,
        private fileService: FilesService
    ) {}
    async create(createPostDto: CreatePostDTO, image: any) {
        const mockImage = await this.fileService.createFile(image);
        const post = this.postRepository.create({
            ...createPostDto,
            image: mockImage,
        });
        return post;
    }
}
