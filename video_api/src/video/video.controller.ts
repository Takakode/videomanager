import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { VideosService } from './videos.service';
import { createVideoDto } from './dto/create-video.dto';
import { Video } from './video.entity';

@Controller('video')
export class VideoController {
    constructor(private videoService: VideosService) {}

    @Post()
    async create(@Body() createVideoDto: createVideoDto) {
        this.videoService.create(createVideoDto);
    }

    @Get()
    async findAll(): Promise<Video[]> {
        return this.videoService.findAll();
    }

    @Get(':id')
    async findById(@Param() params: any): Promise<Video | null> {
        console.log(params.id);
        return this.videoService.findOne(params.id);
    }
}
