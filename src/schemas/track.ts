import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Track {
    @Field()
    name!: string;

    @Field()
    artistName!: string;

    @Field((_type) => Int)
    duration_ms!: number;

    @Field()
    isrc!: string;

    @Field()
    releaseDate!: Date;
}
