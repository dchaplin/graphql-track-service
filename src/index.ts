import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { TrackResolver } from "./resolvers/track.resolver";
import { getUser } from "./auth/getUser";
import { GraphQLError } from "graphql";

type UserContext = {
    user: string;
};

AppDataSource.initialize();

const schema = await buildSchema({
    resolvers: [TrackResolver],
});

const server = new ApolloServer<UserContext>({ schema });

const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
        const token = req.headers.authorization || "";

        const user = getUser(token);
        if (!user)
            throw new GraphQLError("User is not authenticated", {
                extensions: { code: "UNAUTHENTICATED", http: { status: 401 } },
            });
        return { user };
    },
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
