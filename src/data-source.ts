import "reflect-metadata";
import { DataSource } from "typeorm";
import { Track } from "./entity/Track";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Track],
    migrations: [],
    subscribers: [],
});

export const TestDataSource = new DataSource({
    type: "sqlite",
    database: "database.test.sqlite",
    synchronize: true,
    logging: false,
    entities: [Track],
    migrations: [],
    subscribers: [],
});
