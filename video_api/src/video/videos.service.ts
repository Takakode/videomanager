import { Injectable } from '@nestjs/common';
import { Video } from './video.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VideosService {
    constructor(
        @InjectRepository(Video)
        private videoRepository : Repository<Video>
    ) {}

    findAll(): Promise<Video[]> {
        return this.videoRepository.find();
    }

    findOne(id: number) : Promise<Video | null> {
        return this.videoRepository.findOneBy({id});
    }

    async remove(id: number) : Promise<void>{
        await this.videoRepository.delete(id);
    }

    async create(video: Video) : Promise<Video> {
        return this.videoRepository.save(video);
    }
}
