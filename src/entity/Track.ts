import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Track {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    artistName!: string;

    @Column()
    duration!: number;

    @Column()
    ISRC!: string;

    @Column()
    releaseDate!: Date;
}
