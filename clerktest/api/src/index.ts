import express, {NextFunction, Request, Response} from 'express';
import {CustomError} from '../utils/error.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { getAuth, requireAuth } from '@clerk/express';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());

// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// }))

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/test", (req:Request, res:Response) => {
    res.json({message: "Testing testing"})
})

app.get('/protected', requireAuth(), (req: Request, res: Response) => {
    console.log('Protected route');
    const auth = getAuth(req);
    console.log(auth);
    res.sendStatus(200);
})

// app.get('/protected', (req, res) => {
//     res.json({ message: 'This is a protected route' });
//   });

// app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     res.status(statusCode).json({
//         success: false,
//         statusCode,
//         message,
//     });
// })