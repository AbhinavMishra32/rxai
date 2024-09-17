import express, { Request, Response } from 'express';
import db from './db/db_connect';
import { test } from "./test";

console.log("before test");
test();
console.log("after test");

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.get('/test', (req: Request, res: Response) => {
  res.send('Test route');
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
