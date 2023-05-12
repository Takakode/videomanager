import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { Video } from 'src/video/video.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: createUserDto) {
        this.userService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id/favorite')
    async findAllFavorite(@Param() params: any): Promise<Video[] | null> {
        return this.userService.findAllFavoriteOfUser(params.id);
    }

    @Post(':id/favorite')
    async saveFavorite(@Param() params: any, @Body() favorites: Video[]) {
        
    }

    @Get(':id')
    async findById(@Param() params: any): Promise<User | null> {
        return this.userService.findOne(params.id);
    }
}
