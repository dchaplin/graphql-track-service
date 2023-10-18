import { Field, InputType, Int } from "type-graphql";
import { Track } from "../../schemas/track";

@InputType()
export class TrackInput implements Partial<Track> {
    @Field()
    name!: string;

    @Field()
    artistName!: string;

    @Field(() => Int)
    duration!: number;

    @Field((_type) => Int)
    ISRC!: number;

    @Field()
    releaseDate!: Date;
}
