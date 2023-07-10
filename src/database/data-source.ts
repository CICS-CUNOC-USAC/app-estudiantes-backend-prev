import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "app_cics_db",
    entities: ["src/models/*.ts"],
    logging: true,
    synchronize: false,
});
