import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Track } from "../schemas/track";
import { TrackInput } from "./inputs/track.input";
import { seed } from "../seed";
import { TrackService } from "../services/track.service";

@Resolver(Track)
export class TrackResolver {
    @Query(() => Track, { nullable: true })
    async track(@Arg("trackId", () => Int) trackId: number) {
        const trackService = new TrackService();
        return trackService.find(trackId);
    }

    @Query(() => [Track])
    async tracks() {
        const trackService = new TrackService();
        return trackService.all();
    }

    @Query(() => Track, { nullable: true })
    async getTrack(
        @Arg("name", () => String) name: string,
        @Arg("artistName", () => String) artistName: string
    ) {
        const trackService = new TrackService();
        return trackService.findByNameAndArtist(name, artistName);
    }

    @Mutation(() => Track)
    async updateTrack(@Arg("track") trackInput: TrackInput) {}

    @Mutation(() => Track)
    async deleteTrack(@Arg("trackId") trackId: number) {}

    @Query(() => String, { nullable: true })
    async seed(@Arg("name", () => String) name: string) {
        seed();
        return "done";
    }
}
