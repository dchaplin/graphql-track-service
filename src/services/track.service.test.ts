import "reflect-metadata";
import { describe, expect, it, jest } from "@jest/globals";
import { TrackService } from "./track.service";
import { TestDataSource } from "../data-source";
import { Track } from "../entity/Track";
import { ArcCloudService } from "./arcCloud.service";

async function createSong(trackParams: Partial<Track>) {
    const trackRepository = TestDataSource.getRepository(Track);
    return trackRepository.save(trackParams);
}

describe("findByNameAndArtist", () => {
    it("returns a track with the name and artists name", async () => {
        await createSong({
            name: "song name",
            artistName: "artist name",
            duration_ms: 0,
            isrc: "G12345",
            releaseDate: new Date(),
        });

        const trackService = new TrackService();
        const track = await trackService.findByNameAndArtist("song name", "artist name");

        expect(track?.name).toEqual("song name");
        expect(track?.artistName).toEqual("artist name");
    });

    it("calls the arcCloud api if the song is not in the DB", async () => {
        const findOneSpy = jest.spyOn(ArcCloudService, "findOne");

        const trackService = new TrackService();
        await trackService.findByNameAndArtist("No Song", "no artist");

        expect(findOneSpy).toBeCalled();
    });
});
