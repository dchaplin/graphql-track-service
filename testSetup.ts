import "reflect-metadata";
import { AppDataSource, TestDataSource } from "./src/data-source";
import { jest, beforeAll, afterAll } from "@jest/globals";

beforeAll(async () => {
    await TestDataSource.initialize();

    jest.spyOn(AppDataSource, "getRepository").mockImplementation((entity) =>
        TestDataSource.getRepository(entity)
    );
});

afterAll(async () => {
    await TestDataSource.dropDatabase();
    await TestDataSource.destroy();
});
