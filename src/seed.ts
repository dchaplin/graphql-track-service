import { AppDataSource } from "./data-source";
import { Track } from "./entity/Track";

export async function seed() {
    console.log("Inserting a new track into the database...");
    const track = new Track();
    track.name = "Begin Again";
    track.artistName = "Ben Böhmer";
    track.duration_ms = 288834;
    track.isrc = "GBEWA2103550";
    track.releaseDate = new Date("2021-03-25");
    await AppDataSource.manager.save(track);
    console.log("Saved a new track with id: " + track.id);

    console.log("Loading tracks from the database...");
    const tracks = await AppDataSource.manager.find(Track);
    console.log("Loaded tracks: ", tracks);
}
