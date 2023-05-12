import { Video } from 'src/video/video.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pseudo: string;

  @Column()
  email: string;

  @ManyToMany(() => Video)
  @JoinTable()
  favorites: Video[]
}