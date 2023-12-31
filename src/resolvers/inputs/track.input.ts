import { Field, InputType, Int } from "type-graphql";
import { Track } from "../../schemas/track.schema";

@InputType()
export class TrackInput implements Partial<Track> {
    @Field()
    trackId!: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    artistName?: string;

    @Field(() => Int, { nullable: true })
    duration_ms?: number;

    @Field({ nullable: true })
    isrc?: string;

    @Field({ nullable: true })
    releaseDate?: Date;
}
