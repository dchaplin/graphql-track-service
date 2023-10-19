import { Repository } from "typeorm";
import { Track } from "../entity/Track";
import { AppDataSource } from "../data-source";

export class TrackService {
    private readonly trackRepository: Repository<Track>;

    constructor() {
        this.trackRepository = AppDataSource.getRepository(Track);
    }

    async find(id: number) {
        return this.trackRepository.findOneBy({ id });
    }

    async all() {
        return this.trackRepository.find();
    }

    async findByNameAndArtist(name: string, artistName: string) {
        const track = await this.trackRepository.findOneBy({ name, artistName });
        if (track) return track;

        // if can't find then throw error - track unavailable etc
        return this.retrieveTrackInfoFor(name, artistName);
    }

    async updateTrack(id: number, trackParams: Partial<Track>) {
        await this.trackRepository.update({ id }, trackParams);
        return this.trackRepository.findOneBy({ id });
    }

    async deleteTrack(id: number) {
        const result = await this.trackRepository.delete(id);
        return !!result.affected;
    }

    private async retrieveTrackInfoFor(name: string, artistName: string) {
        console.log("Get info from API");
    }
}
