import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});
