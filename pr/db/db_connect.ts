import { drizzle } from "drizzle-orm/node-postgres";
import Client from "pg";

const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "abhinav",
  database: "drizzle-db",
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
