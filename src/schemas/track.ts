import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Track {
    @Field()
    name!: string;

    @Field()
    artistName!: string;

    @Field((_type) => Int)
    duration!: number;

    @Field()
    ISRC!: string;

    @Field()
    releaseDate!: Date;
}
