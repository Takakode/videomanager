import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Video } from 'src/video/video.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number) : Promise<User | null> {
        return this.userRepository.findOneBy({id});
    }

    async remove(id: number) : Promise<void>{
        await this.userRepository.delete(id);
    }

    async create(user: User) : Promise<User> {
        return this.userRepository.save(user);
    }

    async findAllFavoriteOfUser(id: number) : Promise<Video[] | null> {
        const user = await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.favorites', 'favorites')
            .where('user.id = :id', { id })
            .getOne();
        return user ? user.favorites : null;
    }

    async saveFavoriteOfUser(id: number, favorites: Video[]) : Promise<User | null> {
        let user = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.favorites', 'favorites')
        .where('user.id = :id', { id })
        .getOne();

        if (user) {
            user.favorites = favorites;
            await this.userRepository.save(user);
            return user;
        } else {
            return null;
        }
    }
}
