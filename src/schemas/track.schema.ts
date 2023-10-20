import { Field, ID, Int, ObjectType } from "type-graphql";
import { Base } from "./base.schema";

@ObjectType()
export class Track extends Base {
    @Field()
    name!: string;

    @Field()
    artistName!: string;

    @Field(() => Int)
    duration_ms!: number;

    @Field()
    isrc!: string;

    @Field()
    releaseDate!: Date;
}
