import { Video } from "src/video/video.entity";

export class createUserDto {
    id: number;
    pseudo: string;
    email: string;
    favorites: Video[];
}