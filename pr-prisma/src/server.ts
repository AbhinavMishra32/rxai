import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get("/", async (req: Request, res: Response) => {
    const allUsers = await Prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    });
    console.log(allUsers, { depth: null });
    res.status(200).send(allUsers);
});

app.post("/adduser", async (req: Request, res: Response) => {
    const { name, email, title, bio } = req.body;
    try {
        const newUser = await Prisma.user.create({
            data: {
                name, email, posts: {
                    create: { title }
                }, profile: {
                    create: { bio },
                }
            },
        });
        console.log(newUser);
        res.status(201).send('User added successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error adding user');
    }
});
