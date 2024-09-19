import express, { Request, Response } from 'express';
import db from './db/db_connect.ts';
import { userSchema } from './db/schema.ts';
import { v4 } from "uuid";
import { eq } from "drizzle-orm";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

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

app.post('/delete', async (req: Request, res: Response) => {
  try {
    await db.delete(userSchema).where(eq(userSchema.name, req.body.name));
    return res.send('User deleted');
  } catch (e) {
    return res.send('User not found');
  }
})

app.get("/users", async (req: Request, res: Response) => {
  let users = await db.select().from(userSchema);
  if (users.length === 0) {
    return res.send('No users found');
  }
  return res.send(users);
})

app.get('/test', (req: Request, res: Response) => {
  res.send('Test route');
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
