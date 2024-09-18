import { uuid, integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const userSchema = pgTable("users", {
    id: uuid('id').primaryKey(),
    name: varchar('name').notNull().unique(),
    bio: varchar('bio').notNull(),
});