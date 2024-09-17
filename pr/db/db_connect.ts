import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "abhinav",
  database: "testdb",
});

console.log("Attempting to connect to Postgres...");

client.connect()
  .then(() => {
    console.log("Connected to Postgres");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

const db = drizzle(client);

export default db;
