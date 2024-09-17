import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
    dialect: 'postgresql',
    schema: './db/schema.ts',
    out: './drizzle',
    dbCredentials: {
        url: process.env.NEON_DATABASE_URL!,
    },
});