import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './video.entity';
import { VideosService } from './videos.service';
import { VideoController } from './video.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Video])],
    providers: [VideosService],
    controllers: [VideoController]
})
export class VideoModule {}
