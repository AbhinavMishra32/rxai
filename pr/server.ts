import express, { Request, Response } from 'express';
import db from './db/db_connect.ts';
import {userSchema} from './db/schema.ts';
import {v4} from "uuid";
import {eq} from "drizzle-orm";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.post("/create", async (req, res, next) => {
  let id = v4();
  await db.insert(userSchema).values({
    id,
    name: req.body.name,
    bio: req.body.bio,
  });
  //get the user whose userSchema.id == id
  let [user] = await db.select().from(userSchema).where(eq(userSchema.id, id))
  return res.send(user);
});

app.get('/test', (req: Request, res: Response) => {
  res.send('Test route');
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
