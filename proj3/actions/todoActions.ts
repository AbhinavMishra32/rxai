"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { todos } from "@/db/schema";

export const getData = async () => {
    const data = await db.select().from(todos);
    return data;
};

export const addTodo = async (id: number, text: string) => {
    await db.insert(todos).values({
        id: id,
        text: text,
        userId: 0, // Replace 0 with the appropriate user ID
    });
};

export const deleteTodo = async (id: number) => {
    await db.delete(todos).where(eq(todos.id, id));

    revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
    await db
        .update(todos)
        .set({
            done: not(todos.done),
        })
        .where(eq(todos.id, id));

    revalidatePath("/");
};

export const editTodo = async (id: number, text: string) => {
    await db
        .update(todos)
        .set({
            text: text,
        })
        .where(eq(todos.id, id));

    revalidatePath("/");
};