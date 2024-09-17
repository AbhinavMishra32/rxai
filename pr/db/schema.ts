import {uuid, integer, pgEnum, pgTable, serial, uniqueIndex, varchar} from 'drizzle-orm/pg-core';

export const userSchema = pgTable("users",{
    id: uuid('id').primaryKey(),
    name: varchar('name').notNull(),
    bio: varchar('bio').notNull(),
});