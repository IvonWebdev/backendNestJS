import { IsEmail, IsString, Length } from "class-validator";

export class CreatePostDTO {

    readonly title: string;

    readonly content: string;

    readonly userId: number;
}