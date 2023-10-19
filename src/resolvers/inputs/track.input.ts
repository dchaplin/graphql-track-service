import { Field, InputType, Int } from "type-graphql";
import { Track } from "../../schemas/track";

@InputType()
export class TrackInput implements Partial<Track> {
    @Field()
    trackId!: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    artistName?: string;

    @Field(() => Int, { nullable: true })
    duration?: number;

    @Field({ nullable: true })
    ISRC?: string;

    @Field({ nullable: true })
    releaseDate?: Date;
}
