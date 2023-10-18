import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Track } from "../schemas/track";
import { TrackInput } from "./inputs/track.input";

@Resolver(Track)
export class TrackResolver {
    @Query(() => Track, { nullable: true })
    async track(@Arg("trackId", () => Int) trackId: number) {}

    @Query(() => [Track])
    async tracks() {
        return [];
    }

    @Query(() => Track, { nullable: true })
    async getTrackByName(@Arg("name", () => String) name: string) {}

    @Query(() => Track, { nullable: true })
    async getTrackByArtistName(@Arg("artistName", () => String) artistName: string) {}

    @Mutation(() => Track)
    async updateTrack(@Arg("track") trackInput: TrackInput) {}

    @Mutation(() => Track)
    async deleteTrack(@Arg("trackId") trackId: number) {}
}
